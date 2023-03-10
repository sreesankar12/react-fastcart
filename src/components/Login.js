import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import ColorSchemesExample from "../Nvabar";
import "./css/Login.css"
import { useAuth } from "./hooks/useAuth";

import { TextField } from "@mui/material";
import { NotificationManager } from "react-notifications";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {authData, setAuth} = useAuth();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // Call API to login
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    }).then(response=>response.json())
    .catch(e=>{
      console.log(e)
    })

    if(response.key){
      setAuth(response);
      navigate("/")
      NotificationManager.success(`Welcome ${response.user.first_name} ${response.user.last_name} `)
    }
    else{
      NotificationManager.error("Invalid Login Credentials")
    }

  };

  const logout= ()=>{
    setAuth(null);
  }

  return (
    <div >
      <div className="login-div">
          { !authData ? 
      
              <form onSubmit={handleLogin}>
                <div className="m-2 mt-5">

                  <TextField required className="login-fields" id="outlined-basic" label="Email" type="email" variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>


                </div>
                <div className="m-2 mt-4">
                  <TextField required className="login-fields" id="outlined-basic" label="Password" type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                </div>
                <button className="mt-4 mb-4" type="submit">Login</button>
                <Link className="text-center" style={{ textDecoration: 'none', color: 'blue' }} to="/register">New user ? Signup</Link>
              </form>
          : <p> {authData.user.first_name}
          <button onClick={()=>logout()}>Logout</button> </p> }
    </div>
    </div>
  );
}

export default Login;