import './Resultado.css'
import Container from 'react-bootstrap/Container';

function Resultado(props) {

    return (
        <div>
            <Container>
                <h3>Resultado: {props.resultado}</h3>
            </Container>
        </div>
    )
}

export default Resultado;