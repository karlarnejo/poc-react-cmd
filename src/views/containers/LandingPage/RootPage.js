import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Container, Card, Tab, Tabs } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { operations as landingPageOperations } from './state';

const RootPage = () => {

    const dispatch = useDispatch();

    const [command, setCommand] = useState("")
    const [output, setOutput] = useState([])
    const [fileNames, setFileNames] = useState([])

    const handleOnchange = (e) => {
        setCommand(e.target.value)
    }

    const handleOnchangeFile = (e) => {
        console.log(e.target.files)
        //convert from array-like to array
        let files = [...e.target.files]
        let tmpArr = []

        files.map((fileName) => {
            tmpArr.push(fileName.name)
        })
        
        setFileNames(tmpArr)
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
        console.log("eee", fileNames)
    }, [fileNames]) //eslint-disable-line

    useEffect(() => {
        
    }, []) //eslint-disable-line

    return (
        <Container fluid>
            <center>
                <h1>Accenture PoC</h1>
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
                <Row>
                        <Col xs={12}>
                            <Card>
                                <Form className='' onSubmit={submitForm}>
                                    <Form.Group className='m-2'>
                                        <Form.Label>{"Files"}</Form.Label>
                                        <Form.Control
                                            type="file"
                                            // value={command}
                                            size='sm'
                                            disabled={false}
                                            // placeholder={"Enter your command"}
                                            multiple="multiple"
                                            onChange={handleOnchangeFile}
                                        />
                                    </Form.Group>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>

        </Container>
    );
}

export default RootPage;