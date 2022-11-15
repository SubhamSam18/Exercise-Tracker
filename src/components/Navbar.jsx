import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Excerciseslist from "./Excerciseslist";

const Navbar = ({find,setFind}) => {

  
  return (
    <nav className='navbar navbar-dark bg-transparent navbar-expand-lg'>
      <Link to="/" className="navbar-brand"><h1>Exercise Tracker</h1></Link>

      <div className="navbarlnk">
        <ul className="navbar-nav ">
          <li className="navbar-items">
            <Link to="/" className="nav-link">Excercise</Link>
          </li>
          <li className="navbar-items">
            <Link to="/create" className="nav-link">Create Excercise</Link>
          </li>
          <li className="navbar-items">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
          
          {/* <li className="navbar-items">
            <form class="form-inline">
              <input class="form" type="search" placeholder="Search" aria-label="Search"></input>
                <a><button class="btn btn-outline-success" type="submit">Search</button></a>
            </form>
          </li> */}
          <li>
          <div className="search">
            <input className="srch" type="search" placeholder="Enter Username" onChange={(e)=>{setFind(e.target.value)}} value={find}/>
            {/* <button className="btn btn-primary">Search</button> */}
          </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;