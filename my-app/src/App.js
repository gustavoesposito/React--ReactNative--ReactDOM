 import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
 import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Eventos from './components/Eventos'
import Form from './components/Form';


function App( ) {
  const name= 'João'
    return (
       <div className='App'>
        <h1>Testando eventos</h1>
        <Eventos numero="1"/>
        <Eventos numero="2"/>
       <Form/>
        </div>
  );
}

export default App;
