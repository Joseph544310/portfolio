import React, { useState } from 'react'
import { Card, Row, Col, ListGroup, Modal, Button } from 'react-bootstrap'
import './Cards.css'

const Cards = (props) => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const handleClose = () => {
        setShow(false);
    }
    const showImage = src => {
        setImage(src);
        setShow(true);
    }

    return (
        
        <div className="Cards">
            {props.list.map((element, index) => {
                return (
                    <Row className="justify-content-center" key={index}>
                        <Col xs={10} md={8}>
                            <Card className="card">
                                <Card.Header>{element.header}</Card.Header>
                                <ListGroup variant="flush">

                                    {element.items.map((item, index) => {
                                        return (
                                            <ListGroup.Item key={index}>
                                                <Card.Body>
                                                    {item.title !== "" ? <Card.Title>{item.title}</Card.Title> : null}
                                                    <Card.Text className="text">
                                                        {item.text.split("\n").map((line, index) => {
                                                            return (
                                                                <span key={index}>
                                                                    {line}
                                                                    <br />
                                                                </span>
                                                            );

                                                        })}
                                                    </Card.Text>
                                                    {item.links ? item.links.map((link, index) => <Card.Link target="_blank" rel="noopener noreferrer" href={link.href} key={index}>{link.text}</Card.Link>):null}

                                                    {item.images? item.images.map((image, index) => <Button key={index} onClick={() => showImage(image.source)}> {image.name}</Button>):null}
                                                    
                                                    <Modal show={show} onHide={handleClose} className="modal-window">
                                                        <Modal.Body><img src={image} alt="modal-img"/></Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </Card.Body>
                                                <footer className="text-muted">{item.date}</footer>
                                            </ListGroup.Item>
                                        );
                                    }
                                    )
                                    }
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>

                );
            })}

        </div>

    );
};

export default Cards;