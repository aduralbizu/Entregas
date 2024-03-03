import { useState } from 'react';
import './App.css';
import Botones from './Calculadora/Botones';
import Operandos from './Calculadora/Operandos';
import Resultado from './Calculadora/Resultado';
import Footer from './UI/Footer';
import Header from './UI/Header';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

function App() {

  const [A, SetA] = useState("");
  const [B, SetB] = useState("");

  const [resultado, setResultado] = useState("0.00");

  const [errores, setErrores] = useState({}); //Errores de validación del formulario

  const ModificaA = (numero) => {
    SetA(numero);
  }

  const ModificaB = (numero) => {
    SetB(numero);
  }

  const validarValores = () => { //Función de validación para el formulario
    let errores = {};
    if (A === '' || B === '') {
      errores.campoVacio = "Rellene todos los campos.";
    }
    if (!(isValidNumber(A) && isValidNumber(B))) {
      errores.caracteres = "Por favor, introduzca solamente números.";
    }
    return errores;
  };

  const isValidNumber = (input) => {
    // Expresión regular para validar números en formato válido
    const numberRegex = /^$|^-?\d*\.?\d+$/; 
    return numberRegex.test(input);
  };

  const realizarOperacion = (operacion) => {
    const numA = parseFloat(A);
    const numB = parseFloat(B);

    let error = validarValores(); //He hecho un paso intermedio para evitar problemas causados por el hecho de setErrores sea async. UseEffect es una alternativa
    setErrores(error);

    if (Object.keys(error).length > 0) { //Comprobamos que no haya errores
      return;
    }

    let result;
    switch (operacion) {
      case "+":
        result = numA + numB;
        break;
      case "-":
        result = numA - numB;
        break;
      case "x":
        result = numA * numB;
        break;
      case "÷":
        result = numA / numB;
        break;
      default:
        result = 0;
        break;
    }
    setResultado(result.toFixed(2));
  }

  return (
    <div>
      <Header />
      <Operandos A={A} B={B} ModificaA={ModificaA} ModificaB={ModificaB} />
      <Botones realizarOperacion={realizarOperacion} />
      <Resultado resultado={resultado} />
      {errores.campoVacio ? (
        <Container>
          <Alert variant="danger">
            {errores.campoVacio}
          </Alert>
        </Container>
      ) : null}
            {errores.caracteres ? (
        <Container>
          <Alert variant="danger">
            {errores.caracteres}
          </Alert>
        </Container>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
