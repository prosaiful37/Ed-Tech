import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import google from '../../../Images/social/google.png';
import facebook from '../../../Images/social/facebook.png';
import github from '../../../Images/social/github.png';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error || error1 || error2) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

      if (loading || loading1 || loading2) {
        return <Loading></Loading>;
      }

      if (user || user1 || user2) {
        return (
          navigate('/')
        );
      }



      let errorMessage;
      if(error || error1 || error2){
        errorMessage = <p className='text-danger'>Error: {error.message} {error1.message} {error2.message}</p>      
      }

    return (
        <Container>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
            </div>
            <Row>

                <Col sm={12} md={12}>
                    {errorMessage}
                    <button 
                        onClick={() => signInWithGoogle()}
                        style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                        <img style={{width: '25px', marginRight: '3px'}}  src={google} alt="" />
                        <span className='fw-bold text-secondary' >CONTINUE WITH GOOGLE</span>  
                    </button>
                </Col>
                <Col sm={12} md={12}>
                    <button 
                        onClick={() => signInWithFacebook()}
                        style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                        <img style={{width: '25px', marginRight: '3px'}}  src={facebook} alt="" />
                        <span className='fw-bold text-secondary'>CONTINUE WITH FACEBOOK</span> 
                    </button>
                </Col>
                <Col sm={12} md={12}>
                    <button 
                        onClick={() => signInWithGithub()}
                        style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary'>
                        <img style={{width: '25px', marginRight: '3px'}}  src={github} alt="" />
                        <span className='fw-bold text-secondary'>CONTINUE WITH GITHUB</span> 
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default SocialLogin;