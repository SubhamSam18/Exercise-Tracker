import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'
import { useNavigate } from 'react-router-dom';


const CreateExcercise = () => {

  const navigate = useNavigate();

  let user
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState([]);

  var res
  useEffect(() => {
    getUserData()
    // setData(r)
    // eslint-disable-next-line
  }, [])

  async function getUserData() {
    user = await axios.get('http://localhost:5000/users/');
    res = user.data.map((user) => { return user.username })
    setData(res)
    // setData(res)
  }

  const onSubmit = (e) => {
    
    e.preventDefault();
    if(username.length !==0 && description.length !==0 ){
      const excer = {
        username,
        description,
        duration,
        date
      }
      axios.post('http://localhost:5000/excercises/add', excer)
      .then(response=> console.log('Exercise Created'))
      .then(navigate('/'))
      
    }
    else
      alert("Select User");
    

  }

  return (
    <div className='create-exer'>
      <h2>Create New Excercises</h2><br/>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username:</label>

          <br/><br/>
          <select id='inputplace' className='form-control' onChange={(e) => { setUsername(e.target.value) }} value={username}><option><h2 className='selectuser'>--Select User--</h2></option>
            {data && data.map((item,id) => {
              return <option key={id}>{item}</option>
            })}
          </select>
          {/* <input type="text" required className='form-control' onChange={(e)=>{setUsername(e.target.value)}} value={username}/>  */}
        </div>
        <br/>
        <div className='form-group'>
          <label>Description: </label>
          <br/><br/>
          <input type="text" autoComplete='off' id='inputplace' required className='form-control' placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} value={description} />
        </div>
        <br/>
        <div className='form-group'>
          <label>Duration: </label>
          <br/><br/>
          <input type="text" id='inputplace' autoComplete='off' required className='form-control' placeholder='Duration' onChange={(e) => { setDuration(e.target.value) }} value={duration} />
        </div>
        <br/>
        <div className='form-group'>
          <label>Date: </label>
          <br/><br/>
          <input type="date" id='inputplace' required className='form-control' placeholder='Select Date' onChange={(e) => { setDate(e.target.value) }} value={date} />
        </div>
        <br /><br/>
        <div className='form-group'>
          <input type="submit" value="Create Excercise" className='btn btn-primary' />
        </div>
      </form>

    </div>
  )
}

export default CreateExcercise;
