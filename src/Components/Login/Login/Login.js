import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useRef } from "react";
import Loading from "../../Shared/Loading/Loading";
import { Button, Form } from "react-bootstrap";
import auth from "../../../firebase.init";
import {  useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
  // input field useRef
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
    auth
  );

  let from = location.state?.from?.pathname || "/";

  if (error || error1) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  // form submit
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  // handle reset password
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);

    if (email) {
      await sendPasswordResetEmail(email);
      alert("Check Your Email");
    } else {
      alert("Please Give Your Email");
    }


    
  };

  // redirect register page for new account
  const navigateRegister = () => {
    navigate("/signup");
  };
  return (
    <div className="container ">
      <h3 className="text-center mt-3 w-100">LogIn to Continue</h3>
      <Form
        onSubmit={handleSubmitForm}
        className="w-75 mx-auto border mt-2 p-5 text-dark shadow rounded"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          LOG IN
        </Button>

        <p onClick={handleResetPassword}  className="mt-3">
          Reset Password{" "}
          <span className="text-primary" style={{ cursor: "pointer" }}>
            Forgot Password
          </span>
        </p>

        <p onClick={navigateRegister} className="mt-3">
          Dont't have an Account?{" "}
          <span className="text-primary" style={{ cursor: "pointer" }}>
            SIGN UP
          </span>
        </p>
        <div className="containr w-50 mx-auto">
        <SocialLogin></SocialLogin>
      </div>
      </Form>
      
    </div>
  );
};

export default Login;
