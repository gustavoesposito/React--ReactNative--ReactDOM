 import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
 import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Eventos from './components/Eventos'
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista02 from './components/Lista2';

function App( ) {

  const meusItens=['React', 'Angular', 'Vue']
  
  return (
       <div className='App'>
        <h1>Renderização de Listas</h1>
        <Lista02 itens={meusItens}/>
        </div>
  );
}

export default App;
