import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Features.css";
import icon1 from '../../../Images/icons/online-education.png';
import icon2 from '../../../Images/icons/man.png';
import icon3 from '../../../Images/icons/copy.png';
import icon4 from '../../../Images/icons/continuity.png';

const Features = () => {
  return (
    <div className="my-5">
      <Container>
        <div>
          <h5 className="features-title">WHAT WE OFFER</h5>
          <h2 className="h2 fw-bold">For Your Future Learning.</h2>
        </div>
        <div className="features-part">
          <Row>
            
            <Col sm >
                <div className="p-5 iconbox rounded-3">
                    <div className="icons">
                        <img className="iconss" src={icon1} alt="" />
                    </div>
                    <h4 className="h4">Online Courses</h4>
                    <p>Interactively provide access world class materials for unique catalysts for change my ocardinat.</p>
                </div>
            </Col>
            <Col sm >
                <div className="p-5 iconbox rounded-3">
                    <div className="icons">
                        <img className="iconss" src={icon2} alt="" />
                    </div>
                    <h4 className="h4">Expert Trainer</h4>
                    <p>Interactively provide access world class materials for unique catalysts for change my ocardinat.</p>
                </div>
            </Col>
            <Col sm >
                <div className="p-5 iconbox rounded-3">
                    <div className="icons">
                        <img className="iconss" src={icon3} alt="" />
                    </div>
                    <h4 className="h4">Get Certificate</h4>
                    <p>Interactively provide access world class materials for unique catalysts for change my ocardinat.</p>
                </div>
            </Col>
            <Col sm >
                <div className="p-5 iconbox rounded-3">
                    <div className="icons">
                        <img className="iconss" src={icon4} alt="" />
                    </div>
                    <h4 className="h4">Life Time Access</h4>
                    <p>Interactively provide access world class materials for unique catalysts for change my ocardinat.</p>
                </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Features;
