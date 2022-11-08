import React from "react";
import { Link } from "react-router-dom";
import'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ()=>{
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="/" className="navbar-brand">Exercise Tracker</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-items">
            <Link to="/" className="nav-link">Excercise</Link>
          </li>
          <li className="navbar-items">
            <Link to="/create" className="nav-link">Create Excercise</Link>
          </li>
          <li className="navbar-items">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>


    </nav>
  );
  }   

  export default Navbar;