import React from 'react';
import './LiveClass.css';
import { Container } from 'react-bootstrap';
import liveImg from '../../../Images/video-bg-2 (1).jpg';

const LiveClass = () => {
    return (
        <Container className='my-5'>
            <div>
                <div className='Live-title my-5'>
                    <h5 className="features-title text-center my-3">LIVE CLASSES</h5>
                    <h2 className="h2 fw-bold text-center">HD Quality Video, Audio & <br />
                    Live Classes.
                    </h2>
                </div>
                <div className='live-img'>
                    <img className='live-imgs img-fluid' src={liveImg} alt="" />
                </div>
            </div>
            
        </Container>
    );
};

export default LiveClass;