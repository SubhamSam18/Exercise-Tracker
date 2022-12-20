import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Exerciseslist from "./components/Exerciseslist";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  const [find,setFind] = useState('');
  return (
    <div className="container">

        <Router>
          <Navbar find={find} setFind={setFind}/>
          <br />
          <Routes>
            <Route path="/" element={<Exerciseslist find={find}/>} />
            <Route path="/edit/:id" element={<EditExercise />} />
            <Route path="/create" element={<CreateExercise />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
