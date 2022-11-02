import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { operations as landingPageOperations } from './state';

const RootPage = () => {

    const isInitialMount = useRef(true);

    const dispatch = useDispatch();

    const [command, setCommand] = useState("")
    const [output, setOutput] = useState("")

    let tmpOutput = ""

    const handleOnchange = (e) => {
        setCommand(e.target.value)
    }

    const handleClearForm = () => {
        setCommand("")
    }

    const submitForm = (e) => {
        e.preventDefault()

        let payload = {
            command: command
        };

        dispatch(landingPageOperations.listOutput(payload))
            .then((response) => {
                setOutput(response)
            })
    }

    useEffect(() => {
        
    }, []) //eslint-disable-line

    useEffect(() => {
        setCommand(command)
        
    }, [command])

    // useEffect(() => {
    //     // let tmpOutput = output+"\n"

    //     // setOutput(tmpOutput)
    //     console.log("eee", output)
    // }, [output])

    // useEffect(() => {
    //     //prevent this block from running during mount.
    //     //all useEffect instances always run on mount. 
    //     //Need a checker to prevent mounting except for the blank ones.
    //     // isInitialMount.current ? isInitialMount.current = false : submitForm()
    //     if (isInitialMount.current) {
    //         isInitialMount.current = false
    //     }
    //     else {
    //         submitForm()
    //     }

    // }, []) //eslint-disable-line

    return (
        <Container fluid>
            <center>
                <h1>ReactJS Codebase</h1>
            </center>
            {/* <Row>
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
            </Row> */}
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
                            <Form.Row className="mr-0 button-group mt-3" style={{ width: '100% !important' }}>
                                <div className="search-button mr-2">
                                    <Button type="submit" className="btn-success ml-auto" disabled={false}>{"Search"}</Button>
                                </div>
                                <div className="clear-button">
                                    <Button type="button" onClick={handleClearForm} className="btn btn-danger" disabled={false}>{"Clear"}</Button>
                                </div>
                            </Form.Row>
                        </Form>
                        <Card>
                            {output}
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RootPage;