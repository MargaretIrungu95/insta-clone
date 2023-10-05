import './App.css';
import Navbar from './components/navbar';
import Picsapi from './components/picsapi';
import { useState } from 'react';

//import user login/list/logout and register
import Register from './user/register';
import Login from "./user/login"
import Listusers from './user/listusers';
import Logout from './user/logout';



function App() {
  //use states
  const [username,setUsername] = useState("Mafalda");
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [message,setMessage] =useState();
  const [userList, setUserList] = useState();





  return (
    <div className="App">
      <Navbar />

      <h1>{username}</h1>
      {loggedIn ? <h1>is logged in</h1> : <h1>is NOT logged in</h1> }
      <Register setUsername = {setUsername} setEmail = {setEmail} setPassword = {setPassword} setMessage = {setMessage}
                username ={username} password={password} email={email} setLoggedIn={setLoggedIn}>
      </Register>
      <Login setUsername = {setUsername} setPassword = {setPassword} setMessage = {setMessage}
                username ={username} password={password} email={email} setLoggedIn={setLoggedIn}>
      </Login>
      <h1>User Message: {message}</h1>
      <Listusers setUserList = {setUserList} userList = {userList}></Listusers>
      <Logout setUsername = {setUsername} setLoggedIn ={setLoggedIn} setUserList={setUserList}></Logout>
      

      <Picsapi />
    </div>
  );
}

export default App;
