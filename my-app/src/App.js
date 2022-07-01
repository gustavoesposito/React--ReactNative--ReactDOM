 import './App.css';
 import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
 import { useState } from 'react';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Navbar/>
            <Routes>
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/empresa' element={<Empresa/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
          </Routes>
        </Router>

      </header>
    </div>
  );
}



export default App;
