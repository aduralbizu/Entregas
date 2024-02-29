import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Botones (props){

    const operacionHandler = (event) =>{
        console.log("hi");
        console.log(event.target.value);
        props.estableceOperacion(event.target.value);
    }

    return(
        <div>
            <Container>
                <Row>
                    <Col xs={1} ><Button onClick = {operacionHandler} value = "+" variant="secondary">+</Button></Col>
                    <Col xs={1}><Button onClick = {operacionHandler} value = "-" variant="secondary">-</Button></Col>
                    <Col xs={1}><Button onClick = {operacionHandler} value = "x" variant="secondary">x</Button></Col>
                    <Col xs={1}><Button onClick = {operacionHandler} value = "÷" variant="secondary">÷</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Botones;