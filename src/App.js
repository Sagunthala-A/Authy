import React,{useState} from 'react';
import './App.css'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const  App = ()=>{
  const [token,setToken] = useState("");
  return(
    <div>
      <div className ='app'>
        <Signup
          setToken = {setToken}
        />
        <Login
          setToken = {setToken}
        />
      </div>
      <Dashboard
        token = {token}
        setToken = {setToken}
      />
    </div>
  )
}
export default App;