import './Resultado.css'
import Container from 'react-bootstrap/Container';

function Resultado(props) {

    return (
        <div>
            <Container>
                <h2>Resultado: {props.resultado}</h2>
            </Container>
        </div>
    )
}

export default Resultado;