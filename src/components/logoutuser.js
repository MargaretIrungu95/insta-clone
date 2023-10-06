import {useState} from 'react';
import Logout from '../user/logout';

function Logoutmodal() {
    const [userList, setUserList] = useState();
    const [username,setUsername] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
          <Logout setUsername = {setUsername} setLoggedIn ={setLoggedIn} setUserList={setUserList}></Logout>
    </div>
  )
}

export default Logoutmodal;