import { useState } from 'react'
import './App.css'
import Login from '../Login/Login.jsx'
import Signin from '../Signin/Signin.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Home/home.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element= {<Signin/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/home' element= {<Home/>}></Route>


      </Routes>
    </BrowserRouter>
      
  );
}
export default App