import { Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Name from './pages/Name';
import './App.css';

function App() {


  return (
    <div className="App">
      {/* Components */}
      <Sidebar />
      {/* Routes */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products x='9' />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/name/:firstName' element={<Name />} />
      </Routes>
    </div>
  );
}

export default App;
