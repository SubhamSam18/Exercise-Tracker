import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import TableScrollbar from 'react-table-scrollbar';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => { setData(response.data) })
            .catch((error) => {
                console.log(error);
            })
        // console.log(data);
    }, [])

    function deleteData(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => { return res.data })
            .then(res => { setData(res) })
            .catch(err => console.err(err))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        var x = 0;
        // eslint-disable-next-line
        {
            // eslint-disable-next-line
            data.map(names => {
                // console.log(names.username);
                if (names.username === username)
                    x = 1;
            })
        }
        // console.log(x);
        if (x === 0) {
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
            <br></br>
            <br></br>
            <div className='createuserdetails'>

                    <table className='table table-borderless' style={{ color: ' rgb(54, 171, 201)' }}>
                        <thead>
                            <tr>
                                <th>Username</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                data.map((items, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{items.username}</td>
                                            <td><button className='deletebtn' onClick={() => deleteData(items._id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default CreateUser;
