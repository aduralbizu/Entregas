import './Resultado.css'
import Container from 'react-bootstrap/Container';

function Resultado() {

    const resultado = 89;

    return (
        <div>
            <Container>
                <h2>Resultado: {resultado}</h2>
            </Container>
        </div>
    )
}

export default Resultado;