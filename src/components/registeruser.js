import { useState } from 'react';
import Register from '../user/register';

const Registermodal = () => {
 const [username,setUsername] = useState("");
 const [password,setPassword] = useState();
 const [email,setEmail] = useState();
 const [loggedIn, setLoggedIn] = useState(false);
 

  return (
    <div>
        {loggedIn ? <h5>{username} is successfully logged in!</h5> : <h5> {username} is NOT logged in. Please try again</h5> }

        <Register setUsername = {setUsername} setEmail = {setEmail} setPassword = {setPassword}
                username ={username} password={password} email={email} setLoggedIn={setLoggedIn}>
        </Register>
    </div>
  )
}

export default Registermodal;