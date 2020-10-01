import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Row, Col, Alert} from 'react-bootstrap'

import './Contact.css';

const Contact = props => {

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    let alert = null;


    const sendMessage = event => {
        event.preventDefault();
        axios.post("https://cv-web-e8b8e.firebaseio.com/messages.json", { name: name,email: email, message: message })
            .then(response => {
                console.log(response);
                setSuccess(true);
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch(error => {
                
                    console.log(error);
                    setSuccess(false);
                });
        setMessage("");
        setName("");
        setEmail("");
    };
    return (
        <Row className="justify-content-center">
            <Col xs={10} md={8}>
                <Form onSubmit={sendMessage} className="Form">
                    <Form.Group onChange={event => setName(event.target.value)}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={name} required />
                    </Form.Group>
                    <Form.Group onChange={event => setEmail(event.target.value)}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={email} required />
                    </Form.Group>
                    <Form.Group onChange={event => setMessage(event.target.value)}>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" value={message} required id="message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                    {success === true ?
                     <Alert className="alert" variant="success">
                        Message Sent!
                    </Alert> : null }
                </Form>
                {alert}
            </Col>
        </Row>
        
    );
}

export default Contact;