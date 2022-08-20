import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brand1 from '../../../Images/brand/brand-icon-01.png';
import brand2 from '../../../Images/brand/brand-icon-02.png';
import brand3 from '../../../Images/brand/brand-icon-03.png';
import brand4 from '../../../Images/brand/brand-icon-04.png';
import brand5 from '../../../Images/brand/brand-icon-05.png';

const BusinessBrand = () => {
    return (
        <div className='bg-light'>
            <Container>
                <div>
                    <div className='Live-title my-5 p-5'>
                        <h5 className="features-title text-center my-3">OUR PARTNERS</h5>
                        <h2 className="h2 fw-bold text-center">Our Key Supporters
                        </h2>
                    </div>
                    <div className='pb-3'>
                    <Row>
                        <Col>
                            <img src={brand1} alt="" />
                        </Col>
                        <Col>
                            <img src={brand2} alt="" />
                        </Col>
                        <Col>
                            <img src={brand3} alt="" />
                        </Col>
                        <Col>
                            <img src={brand4} alt="" />
                        </Col>
                        <Col>
                            <img src={brand5} alt="" />
                        </Col>
                        
                    </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BusinessBrand;