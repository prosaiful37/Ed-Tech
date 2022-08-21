import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import ownerImg from "../../../Images/Courses/icons8-user-30.png";
import lessionImg from "../../../Images/Courses/c-meta-01.png";
import studentImg from "../../../Images/Courses/c-meta-02.png";
import review from "../../../Images/Courses/c-meta-03.png";
import { useNavigate } from 'react-router-dom';

const ServicesCourse = ({course}) => {
    const {img, title, lession, student, category, subCategory, price} = course;
    const navigate = useNavigate();


    // redirect register page for new account
    const navigateToServices = () => {
        navigate("/services");
    };

    return (
        <Col>
            <Card className='mb-5'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <div className='d-flex g-2'>
                <img className='m-2' src={ownerImg} alt="" />
                <h5 className=''>{title}</h5>
                </div>
            
            <div className='d-flex gap-3'>
                <div className="">
                    <p><span className='m-2'><img src={lessionImg} alt="" /> </span>{lession} Lession</p>
                </div>
                <div>
                    <p><span className='m-2'><img src={studentImg} alt="" /></span>{student} Student</p>
                </div>
                <div>
                
                <p><span className='m-2'><img src={review} alt="" /></span> 4.5 Review</p>
                </div>

            </div>

            <div className='d-flex gap-2'>
                <Button variant="outline-danger">{category}</Button>{' '}
                <Button variant="outline-danger">{subCategory}</Button>{' '}
            </div>
            
            </Card.Body>
            <Card.Footer>
            <div className='d-flex justify-content-between'>
                <Button onClick={navigateToServices} variant="danger">ENROLL NOW</Button>
                <h6 className='fw-bold'>Price: ${price}</h6>
            </div>
            </Card.Footer>
            </Card>
        </Col>
         
       
       
    );
};

export default ServicesCourse;