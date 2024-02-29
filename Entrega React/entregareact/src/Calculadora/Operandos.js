import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Operandos(props) {

    const AHandler = (event) =>{
        props.ModificaA(event.target.value);
    }

    const BHandler = (event) =>{
        props.ModificaB(event.target.value);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form.Label><h2>A</h2></Form.Label>
                        <Form.Control onChange = {AHandler} type="text" value={props.A} />
                    </Col>
                    <Col>
                        <Form.Label><h2>B</h2></Form.Label>
                        <Form.Control onChange = {BHandler} type="text" value={props.B}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Operandos;