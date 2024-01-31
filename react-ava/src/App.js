import logo from './logo.svg';
import './App.css';
import Lista from './Componentes/Lista';
import Lista2 from './Componentes/Lista2';
import Condicional from './Componentes/Condicional';
import Clique from './Componentes/Clique';
import Estado from './Componentes/Estado';
import EstadoCond from './Componentes/EstadoCond';

function App() {
  return (
    <div className="App">
      <Lista/>
      <Lista2/>
      <Condicional/>
      <Clique/>
      <Estado/>
      <EstadoCond/>
    </div>
  );
}

export default App;
