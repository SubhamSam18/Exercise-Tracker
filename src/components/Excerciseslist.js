import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import {Link} from 'react-router-dom';

const Excercise =(props)=>{
  console.log(props.excercise);
  console.log(props.excercise.username);
  <tr>
    <td>{props.excercise.username}</td>
    <td>{props.excercise.description}</td>
    <td>{props.excercise.duration}</td>
    <td>{props.excercise.date}</td>
    <td><Link to={"/edit/"+props.excercise._id}>edit</Link> | <a href='#' onClick={()=>props.deleteExer(props.excercise._id)}>Delete</a></td>
  </tr>
}

const Excerciseslist = () => {

  const [excercises,setExcercises]= useState([]);

  async function getData(){
    console.log("Hi");
    const user = await axios.get('http://localhost:5000/excercises/')
    .then(response =>{
      console.log('Got the data');
      setExcercises(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    getData();
  },[])

  
  const deleteData = (id)=>{
    axios.delete('http://localhost:5000/excercises/'+id)
    .then(res => console.log(res.data));
    setExcercises((oldItems)=>{
      return oldItems.filter((ele,index)=>
      {return index!==id}
      )
    })

  }

  return (
    <div>
        <h2>Logged Excercises</h2>
        <table className='table' align='ce'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Durtion</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          
          {excercises && excercises.map(item =>{
            return(
              <tr>
              <th>{item.username}</th>
              <th>{item.description}</th>
              <th>{item.duration}</th>
              <th>{item.date}</th>
              <th><button onClick={deleteData}>delete</button></th>
            </tr>
            )
          })}
          
          {/* <Excercise excercise ={excercises} deleteExer = {deleteData} key={excercises._id}/> */}
        </table>
    </div>
  )
}

export default Excerciseslist;