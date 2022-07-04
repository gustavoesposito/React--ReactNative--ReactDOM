import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
 import Home1 from './components/pages/Home1';
 import Empresa from './components/pages/Empresa.js'
 import Contato from './components/pages/Contato.js'
 import NewProject from'./components/pages/NewProject.js'
 function App() {
  return (
      <Router>
       <div>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/newproject">NewProject</Link>
       </div>
        <Routes>
              <Route path='/' exact='true' element={<Home1/>}></Route>
              <Route path='/Empresa' element={<Empresa/>}></Route>
              <Route path='/Contato' element={<Contato/>}></Route>
              <Route path='/NewProject' element={<NewProject/>}></Route>
              
              
            </Routes>
        
        <p>Footer</p>
      </Router>

     
  );
}

export default App;
