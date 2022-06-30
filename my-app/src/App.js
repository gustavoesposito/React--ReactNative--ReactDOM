 import './App.css';
 import { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
 import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Eventos from './components/Eventos'
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista02 from './components/Lista2';
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao';

function App( ) {
  const[nome,setNome]= useState()

   return (
       <div className='App'>
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
         </div>
  );
}

export default App;
