import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Page from './pages/Page'



function App() {

  const [showNav, setShowNav] = useState(true)

  const toggleNav = (boolean) => {
    console.log('bool', boolean)
    setShowNav(boolean)
  }

  return (
    <div className="App" id='app'>
    { showNav &&
      <Navbar showNav={showNav} />
    } 
      <Page id='about' name='about' color='#66545e' upPage='about' downPage='contact' showNav={showNav} toggleNav={toggleNav} />
      <Page id='contact' name='contact' color='#aa6f73' upPage='about' downPage='service' showNav={showNav} toggleNav={toggleNav} />
      <Page id='service' name='service' color='#eea990' upPage='contact' downPage='team' showNav={showNav}  toggleNav={toggleNav}  />
      <Page id='team' name='team' color='#f6e0b5' upPage='service' downPage='team' showNav={showNav} toggleNav={toggleNav} />
    </div>
  );
}

export default App;
