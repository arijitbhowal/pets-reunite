import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Form from "./components/Form";
import Design from "./Design";
import Loginhome from "./components/Loginhome";
import './App.css';
import PasswordReset from "./components/PasswordReset";
import SearchPet from "./components/SearchPet";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div className="App">
      <Design/>
    <Routes>
      <Route path='/' element={<Home/>}  /> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Loginhome/>} />
      <Route path='/resetpassword'element={<PasswordReset/>} />
      <Route path='/lost' element={<Form/>} />
      <Route path='/found' element={<Form/>} />
      <Route path='/search' element={<SearchPet/>} />
      <Route path='/map' element={<MapComponent/>} />
    </Routes>
    </div>
  );
}

export default App;
