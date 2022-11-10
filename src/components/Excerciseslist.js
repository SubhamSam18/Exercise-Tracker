import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Excerciseslist = () => {

  const [excercises,setExcercises]= useState([]);

  async function getData(){
    // console.log("Hi");
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

    async function deleteData(id){
      await axios.delete('http://localhost:5000/excercises/'+id)
      .then(res => console.log(res.data));
      let filterarr = excercises.filter((e)=>e.id!==id)
      console.log(filterarr)
      getData()
    }
    // ((oldItems)=>{
    //   return oldItems.filter((ele,index)=>
    //   {return index!==id}
    //   )
    // })

  return (
    <div>
        <h2>Logged Excercises</h2>
        <br/>
        <table className='table table'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Durtion(min)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          
          {excercises && excercises .map(item =>{
            return(
              <tr>
              <td>{item.description}</td>
              <td>{item.duration}</td>
              <td>{item.username}</td>
              <td>{item.date.substring(0,10)}</td>
              <td><button className='deletebtn' onClick={()=>deleteData(item._id)}>delete</button></td>
            </tr>
            )
          })}
          
          {/* <Excercise excercise ={excercises} deleteExer = {deleteData} key={excercises._id}/> */}
        </table>
    </div>
  )
}

export default Excerciseslist;