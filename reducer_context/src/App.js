import {Routes, Route} from 'react-router-dom'
import NavbarData from './assets/NavbarData'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Team from './pages/Team'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1> Hello</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;

      // {NavbarData.map((item,index)=>(
      //     <Route key={index} path={item.path} element={`<${item.title} />`} />
      // ))}