import {useState} from 'react';
import Listusers from '../user/listusers';

function Listmodal() {
    const [userList, setUserList] = useState();
  return (
    <div>
         <h5>The users on this database are:</h5>
         <Listusers setUserList = {setUserList} userList = {userList}></Listusers>
    </div>
  )
}

export default Listmodal;