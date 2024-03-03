import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Botones(props) {

    const [operacion, setOperacion] = useState('');

    const operacionHandler = (event) => {
        // console.log(event.target.value);
        setOperacion(event.target.value);
        props.realizarOperacion(event.target.value);
    }

    return (
        <div>
            <Container className="pb-4 pt-4">
                <Row className="">
                    <Col xs={1} ><Button className="w-100" onClick={operacionHandler} value="+" variant={operacion === '+' ? 'primary' : 'secondary'}>+</Button></Col>
                    <Col xs={1}><Button className="w-100" onClick={operacionHandler} value="-" variant={operacion === '-' ? 'primary' : 'secondary'}>-</Button></Col>
                    <Col xs={1}><Button className="w-100" onClick={operacionHandler} value="x" variant={operacion === 'x' ? 'primary' : 'secondary'}>x</Button></Col>
                    <Col xs={1}><Button className="w-100" onClick={operacionHandler} value="÷" variant={operacion === '÷' ? 'primary' : 'secondary'}>÷</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Botones;