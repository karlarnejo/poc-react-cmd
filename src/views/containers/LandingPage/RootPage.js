import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const RootPage = () => {

    const dispatch = useDispatch();

    const [command, setCommand] = useState("")

    const handleOnchange = (e) => {
        setCommand(e.target.value)
    }

    return (
        <Container fluid>
            <center>
                <h1>ReactJS Codebase</h1>
            </center>
            <Row>
                <Col xs={12}>
                <Form.Group className='m-2'>
                    <Form.Label>{"Command"}</Form.Label>
                    <Form.Control
                        type="text"
                        value={command}
                        size='sm'
                        disabled={false}
                        placeholder={"Enter your command"}
                        onChange={handleOnchange}
                    />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>

                </Col>
            </Row>
        </Container>
    );
}

export default RootPage;