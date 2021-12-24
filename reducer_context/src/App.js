import {Routes, Route} from 'react-router-dom'
import HeaderProvider from './contexts/headerColor/HeaderProvider'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Team from './pages/Team'
import './App.css';
import HeaderColorSelector from './components/HeaderColorSelector'

function App() {
  return (
    <HeaderProvider>

      <div className="App">
        <Navbar />
        <HeaderColorSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </div>
    
    </HeaderProvider>
  );
}

export default App;

      // {NavbarData.map((item,index)=>(
      //     <Route key={index} path={item.path} element={`<${item.title} />`} />
      // ))}