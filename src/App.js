import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Form from "./components/Form";
import Loginhome from "./components/Loginhome";
import './App.css';
import PasswordReset from "./components/PasswordReset";
import SearchPet from "./components/SearchPet";
import MapComponent from "./components/MapComponent";
import Account from "./components/Account";
import { AuthContext } from './context/AuthContext';
import SuccessStories from "./components/SuccessStories";
import UpdatePet from "./components/UpdatePet";

function App() {

  const {currentUser} = React.useContext(AuthContext);
  const isAuth = currentUser ? true : false;

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Login/>
  };

  console.log(currentUser);
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home/>}  /> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<RequireAuth><Loginhome/></RequireAuth> } />
      <Route path='/resetpassword'element={<PasswordReset/>} />
      <Route path='/lost' element={<RequireAuth><Form/></RequireAuth>} />
      <Route path='/found' element={<RequireAuth><Form/></RequireAuth>} />
      <Route path='/search' element={<RequireAuth><SearchPet/></RequireAuth>} />
      <Route path='/map' element={<RequireAuth><MapComponent/></RequireAuth>} />
      <Route path='/myaccount' element={<RequireAuth><Account/></RequireAuth>} />
      <Route path='/successstories' element={<RequireAuth><SuccessStories isAuth={isAuth}/></RequireAuth>} />
      <Route path='/update/:petId' element={<RequireAuth><UpdatePet /></RequireAuth>} />
    </Routes>
    </div>
  );
}

export default App;
