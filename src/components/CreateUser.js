import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
    const [username, setUsername] = useState('');

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => {setData(response.data)})
            .catch((error) => {
                console.log(error);
            })
            // console.log(data);
    },[data])

        
    const onSubmit = (e) => {
        e.preventDefault();
        var x = 0;
        {
            data.map(names => {
                // console.log(names.username);
                if (names.username === username)
                    x = 1;
            })
        }
        // console.log(x);
        if (x === 0)
         {
            axios.post('http://localhost:5000/users/add', { username })
            .then(res => console.log(res.data))
            .then(alert("User Added"))
            .then(navigate('/'))
        }
        else
            alert("User Exist");
        // .then(alert("User Added"))

        console.log(username);
    }

    return (
        <div className='create-exer'>
            <h2>Create New Excercises</h2><br />
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <br /><br />
                    <input id='inputplace' autoComplete='off' type="text" required className='form-control' placeholder='Enter Username' onChange={(e) => { setUsername(e.target.value) }} value={username} />
                </div>
                <br />
                <div className='form-group'>
                    <input type="submit" value="Create User" className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}

export default CreateUser;
