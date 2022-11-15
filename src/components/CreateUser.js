import React, { useState } from 'react'
import axios from 'axios';
const CreateUser = () => {
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/users/add', {username})
            .then(res => console.log(res.data))
            // .then(alert("User Added"))
            .catch(alert("User Exist"))
            
        console.log(username);
    }

    return (
        <div className='create-exer'>
            <h2>Create New Excercises</h2><br/>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <br/><br/>
                    <input id='inputplace' autoComplete='off' type="text" required className='form-control' placeholder='Enter Username' onChange={(e) => { setUsername(e.target.value) }} value={username} />
                </div>
                <br/>
                <div className='form-group'>
                    <input type="submit" value="Create User" className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}

export default CreateUser;
