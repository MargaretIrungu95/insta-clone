//importing files and dependencies needed within this file for the component Navbar
import React from 'react';
import Loginmodal from './login';
import Registermodal from './registeruser';
import Logoutmodal from './logoutuser';
import Listmodal from './list';
import { useState } from 'react';

//create navbar within this function (component)
function Navbar() {
  // use states to set up show and hide functions of the buttons as well as logging user out 
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showList, setShowList] = useState(false);
  const [logout, setLogout] =useState(false);
  

  return (
    <div className = "wholeNavbar">
        {/* logout button created to log user out and expire token */}
        <div className='logoutBtn'>
          {logout ? <Logoutmodal setLogout={setLogout}/> : ""}
          <button className='logoutBtn' onClick={() => setLogout(!logout)}> LOG OUT </button>
        </div>

        {/* list button when clicked shows list of users or hides them when clicked again */}
        <div className='listBtn'>
          {showList ? <Listmodal setShowList={setShowList}/> : ""}
          <button className='listusersBtn' onClick={() => setShowList(!showList)}>List Users</button>
        </div>

        {/* insert Instagram logo */}
        <div className='logo'>
          <img
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kplcYfrmdwZZYC0dXgcjWf4xi-4sKMFVDfzA-h-GL5hCA1cDm43v_XIPOoNjboOkgA&usqp=CAU"
            alt="Instagram logo no background"
            width= "30%"
            className='instalogo'
          />
        </div>

        {/* login button to log user in and check their token is valid. This is hard coded in user/login.jsx */}
        <div className='loginBtn'>
          {showLogin ? <Loginmodal setShowLogin={setShowLogin}/> : ""}
          <button className='loginBtn' onClick={() => setShowLogin(!showLogin)}>
            LOG IN
          </button>
        </div>

        {/* register button to add users to database and issue a new token */}
        <div className='registerBtn'>
          {showRegister ? <Registermodal setShowRegister={setShowRegister}/> : ""}
          <button className='signinBtn' onClick={ () => setShowRegister(!showRegister)}>
            SIGN IN
          </button>
        </div>
    </div>
  )
}

//export so it is possible to import in app.js
export default Navbar;
