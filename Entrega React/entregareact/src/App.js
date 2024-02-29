import { useState } from 'react';
import './App.css';
import Botones from './Calculadora/Botones';
import Operandos from './Calculadora/Operandos';
import Resultado from './Calculadora/Resultado';
import Footer from './UI/Footer';
import Header from './UI/Header';

function App() {

  const [A, SetA] = useState("");
  const [B, SetB] = useState("");

  const [operacion, setOperacion] = useState("+");

  const ModificaA = (numero) => {
    SetA(numero);
  }

  const ModificaB = (numero) => {
    SetB(numero);
  }

  const estableceOperacion = (operacion) => {
    setOperacion(operacion);
  }

  return (
    <div>
      <Header />
      <Operandos A={A} B={B} ModificaA={ModificaA} ModificaB={ModificaB} />
      <Botones estableceOperacion={estableceOperacion} />
      <Resultado />
      <Footer />
    </div>
  );
}

export default App;
