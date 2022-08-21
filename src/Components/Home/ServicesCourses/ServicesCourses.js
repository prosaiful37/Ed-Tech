import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCourse from "./ServicesCourse";

const ServicesCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('Courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
  return (
    <div>
      <Container>
        <div className="text-center my-5">
          <h5 className="features-title">WHAT WE OFFER</h5>
          <h2 className="h2 fw-bold">For Your Future Learning.</h2>
        </div>

        <Row xs={1} md={3} >
          
            {
                courses.map(course => <ServicesCourse course={course}></ServicesCourse>)
            }
          
        </Row>

      </Container>
    </div>
  );
};

export default ServicesCourses;
