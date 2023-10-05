import React from 'react';

function Navbar() {
  return (
    <div className = "wholeNavbar">
        <div>
          <button className='logoutBtn'> LOG OUT </button>
        </div>
        <div className='logo'>
          <img
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kplcYfrmdwZZYC0dXgcjWf4xi-4sKMFVDfzA-h-GL5hCA1cDm43v_XIPOoNjboOkgA&usqp=CAU"
            alt="Instagram logo no background"
            width= "30%"
          />
        </div>
        <div>
          <button className='loginBtn'>
            LOG IN
          </button>
        </div>
        <div>
          <button className='signinBtn'>
            SIGN IN
          </button>
        </div>
    </div>
  )
}

export default Navbar;
