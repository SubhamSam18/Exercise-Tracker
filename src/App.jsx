import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Excerciseslist from "./components/Excerciseslist";
import EditExcercise from "./components/EditExcercise";
import CreateExcercise from "./components/CreateExcercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="container">
    <Router>
      <Navbar />
      <br/>
      <Routes>
        <Route path="/" element={<Excerciseslist/>} />
        <Route path="/edit/:id" element={<EditExcercise/>} />
        <Route path="/create" element={<CreateExcercise/>} />
        <Route path="/user" element={<CreateUser/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
