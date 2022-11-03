import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Container, Card, Tab, Tabs } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { operations as landingPageOperations } from './state';

const RootPage = () => {

    const dispatch = useDispatch();

    const [command, setCommand] = useState("")
    const [output, setOutput] = useState([])

    const handleOnchange = (e) => {
        setCommand(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()

        let payload = {
            command: command
        };

        dispatch(landingPageOperations.listOutput(payload))
            .then((response) => {
                setOutput(oldVal => [...oldVal, response])
            })
    }

    useEffect(() => {
        
    }, []) //eslint-disable-line

    return (
        <Container fluid>
            <center>
                <h1>ReactJS Codebase</h1>
            </center>

            <Tabs
                defaultActiveKey="cmd"
                id="uncontrolled-tab"
                className="mb-3"
            >
                <Tab eventKey="cmd" title="Command Line">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <Form className='' onSubmit={submitForm}>
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
                                </Form>
                                <hr/>
                                    <Card>
                                        {output.map((value, key) => {
                                            let splitted = value.split("\n")
                                            return(
                                                <div key={key}>
                                                    <div>{">" + splitted[0]}</div>
                                                    <div>{splitted[1]}</div>
                                                </div>
                                            )
                                        })}
                                    </Card>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="fileChooser" title="File Chooser">
                </Tab>
            </Tabs>

        </Container>
    );
}

export default RootPage;