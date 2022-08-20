import React from "react";
import "./Banner.css";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import banner from "../../../Images/Banner/banner-img-1.png";
import banner2 from "../../../Images/Banner/banner-shape-01.png";

const Banner = () => {
  return (
    <div className="bg-light">
      <Container className="slider">
        <Carousel>
          <Carousel>
            <Row className="d-flex align-items-center">
              <Col xs={6} md={6}>
                <div className="slider-details">
                  <h5>Learn New Skills & Popular Courses</h5>
                  <h3 className="display-3 fw-bold">
                    For Every Student, Every{" "}
                    <span className="hero-title">Classroom</span>{" "}
                  </h3>
                  <p>
                    Dramatically supply transparent deliverables before backward
                    comp internal or "organic" sources. Competently leverage
                    other.{" "}
                  </p>
                  <Button className="hero-btn">All Courses</Button>{" "}
                </div>

                {/* <Carousel.Caption className="slider-car"></Carousel.Caption> */}
              </Col>
              <Col xs={6} md={6}>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner}
                  alt="First slide"
                />
                
              </Col>
              
            </Row>
          </Carousel>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
