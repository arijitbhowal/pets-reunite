import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Form from "./components/Form";
import Design from "./Design";
import Loginhome from "./components/Loginhome";

function App() {
  return (
    <div className="App">
      <Design/>
    <Routes>
      <Route path='/' element={<Home/>}  /> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/form' element={<Form/>} />
      <Route path='/home' element={<Loginhome/>} />
    </Routes>
    </div>
  );
}

export default App;
