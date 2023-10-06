import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Picsapi from './components/picsapi';


function App() {
  const [showNav, setShowNav] = useState(false);

  //show navbar on scroll up but not down
  let prevScrolllPos = window.scrollY;
  window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrolllPos > currentScrollPos || currentScrollPos < 200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    prevScrolllPos = currentScrollPos;
  };

  return (
    <div className="App">
      {showNav ? <Navbar/> : ""}
      <Picsapi />
    </div>
  );
}

export default App;
