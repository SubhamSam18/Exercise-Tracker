import React, { useEffect, useState } from 'react'
import axios from 'axios';


const CreateExcercise = () => {


  let user
  const [username,setUsername] = useState('');
  const [description,setDescription] = useState('');
  const [duration,setDuration] = useState('');
  const [date,setDate] = useState('');
  const [data,setData] = useState([]);

  var res
 useEffect(()=>{
  getUserData()
  // setData(r)
 },[]) 

async function getUserData(){
    user= await axios.get('http://localhost:5000/users/');
    res = user.data.map((user)=>{ return user.username})
    setData(res)
// setData(res)
  }
 
  const onSubmit = (e)=>{
    console.log('hi')
    e.preventDefault();
    const excer = {
      username,
      description,
      duration,
      date
    }
    axios.post('http://localhost:5000/excercises/add',excer);

  }

  return (
    <div>
      <p>Create New Excercises</p>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          
          <select className='form-contorl' onChange={(e)=>{setUsername(e.target.value)}} value={username}><option>select user</option>
            {data && data.map(item=>{
        return <option>{item}</option>
      })}</select>
          {/* <input type="text" required className='form-control' onChange={(e)=>{setUsername(e.target.value)}} value={username}/>  */}
        </div>
        <div className='form-group'>
          <label>Description: </label>
          <input type="text" required className='form-control' onChange={(e)=>{setDescription(e.target.value)}} value={description}/> 
        </div>
        <div className='form-group'>
          <label>Duration: </label>
          <input type="text" required className='form-control' onChange={(e)=>{setDuration(e.target.value)}} value={duration}/> 
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <input type="date" required className='form-control' onChange={(e)=>{setDate(e.target.value)}} value={date}/> 
        </div>
        <br/>
        <div className='form-group'>
          <input type="submit" value="Create Excercise" className='btn btn-primary'/>
        </div>
      </form>
      
    </div>
  )
}

export default CreateExcercise;
