import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from "../../../Images/brand/suit-bg-01.png";
import img2 from "../../../Images/brand/suit-bg-02.png";

const Connected = () => {
    return (
        <div>
            <Container>
                     <div className='Live-title mt-5 p-5'>
                        <h5 className="features-title text-center my-3">JOIN WITH US</h5>
                        <h2 className="h2 fw-bold text-center"> Which One is Suitable For You?
                        </h2>
                    </div>

                    <div>
                        <Row> 
                            <Col className='d-flex shadow-lg rounded-3 p-3 gap-3 m-2'>
                                <div>
                                    <h2>Do you want to <span className='text-danger'>Learn</span> here?</h2>
                                    <p>Dramatically supply transpa deliverables before & you.</p>
                                    <Button>Join Now</Button>
                                </div>
                                <img src={img1} alt="" />
                            </Col>
                            <Col className='d-flex shadow-lg rounded-3 p-3 gap-3 m-2'>
                                <div>
                                    <h2>Do you want to <span className='text-danger'>Learn</span> here?</h2>
                                    <p>Dramatically supply transpa deliverables before & you.</p>
                                    <Button>Join Now</Button>
                                </div>
                                <img src={img2} alt="" />
                            </Col>
                        </Row>
                    </div>
            </Container>
        </div>
    );
};

export default Connected;