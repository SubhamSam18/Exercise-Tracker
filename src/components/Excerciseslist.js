import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Typical from 'react-typical'

const Excerciseslist = (props) => {

  const [excercises, setExcercises] = useState([]);

  const username = props.find;

  useEffect(() => {
    axios.get('http://localhost:5000/excercises/')
      .then(response => {
        console.log('Got the data');
        return response.data;
      }).then(response =>{
        setExcercises(response);
      })
      .catch((error) => {
        console.log(error);
      })
    // eslint-disable-next-line
  }, [])

  function deleteData(id) {
    axios.delete('http://localhost:5000/excercises/' + id)
      .then(res => {return res.data})
      .then(res =>{ setExcercises(res)})
      .catch(err => console.err(err))
  }

  return (
    <div className='tablelog'>
      <h2>
      <Typical
        loop={Infinity}
        steps={[
            "Logged Exercises",
            1000,
            " ",
            100,
        ]} />
      </h2>
      <br />
      <table className='table table-borderless' style={{color:' rgb(54, 171, 201)'}}>
        <thead>

        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Durtion(min)</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>

        {excercises.length < 1 && <div>No User Found</div>}
        {excercises && excercises.filter(excercise => excercise.username.toLowerCase().startsWith(username.toLowerCase() )).map((item, id) => {
          return (
            
            <tr key={id}>
              <td>{item.username}</td>
              <td>{item.description}</td>
              <td>{item.duration}</td>
              <td>{item.date.substring(0, 10)}</td>
              <td><button className='deletebtn' onClick={() => deleteData(item._id)}><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Excerciseslist;