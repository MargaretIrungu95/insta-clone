import React from 'react';
import Login from '../user/login';
import { useState } from 'react';

function Loginmodal() {
    const [username,setUsername] = useState("Mafalda");
    const [password,setPassword] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
        <h1>{username}</h1>
        {loggedIn ? <h5>is logged in</h5> : <h5>is NOT logged in</h5> }
        <Login setUsername = {setUsername} setPassword = {setPassword}
                username ={username} password={password} setLoggedIn={setLoggedIn}> 
        </Login>
    </div>
  )
}

export default Loginmodal;