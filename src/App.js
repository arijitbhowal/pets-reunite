import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Form from "./components/Form";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}  /> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/form' element={<Form/>} />
    </Routes>
  );
}

export default App;
