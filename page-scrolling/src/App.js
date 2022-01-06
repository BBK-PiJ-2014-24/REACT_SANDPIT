import './App.css';
import Navbar from './components/Navbar';
import Page from './pages/Page'



function App() {
  return (
    <div className="App" id='app'>
      <Navbar />
      <Page id='about' name='about' color='#66545e' upPage='about' downPage='contact' />
      <Page id='contact' name='contact' color='#aa6f73' upPage='about' downPage='service' />
      <Page id='service' name='service' color='#eea990' upPage='contact' downPage='team' />
      <Page id='team' name='team' color='#f6e0b5' upPage='service' downPage='team' />
    </div>
  );
}

export default App;
