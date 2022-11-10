import React, { useState } from 'react'
import axios from 'axios';
const CreateUser = () => {
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/users/add', {username})
            .then(res => console.log(res.data));
        console.log(username);
    }

    return (
        <div>
            <p>Create New Excercises</p>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <br/><br/>
                    <input type="text" required className='form-control' onChange={(e) => { setUsername(e.target.value) }} value={username} />
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
