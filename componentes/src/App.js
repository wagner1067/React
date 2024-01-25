import './App.css';
import Button from './componentes/Button'
import Aluno from './componentes/Aluno';

function App() {
  return (
    <div className="App">
     <Aluno name= 'Wagner' age= '27' level= 'junior' course= 'Escola DNC' />
     <Button text='Aprovar' />
    </div>
  );
}

export default App;
