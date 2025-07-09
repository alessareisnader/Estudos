import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Botao from './components/Botao';


function App (){
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Botao type={"habilitado"} legenda={"Aceitar"} />} />
    <Route path="/disable" element={<Botao type={"desabilitado"} legenda={"Cancelar"} />} />
      </Routes>
    </Router>
  );
}
  

export default App;
