import React from "react";
import "./login-main.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginMain = () =>{
    return (
        <div className="login-main">
            <div className="login-container">
            <h1 className="main-heading">Login to Continue </h1>
    
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" required/>    
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="*********" required/>    
            </FloatingLabel>

            <div className="my-4 text-right">
                <a href="#/" className="text-pink link-small">Forgot Password?</a>
            </div>
            <div className="my-4">
                <button className="btn sign-in">Sign In</button>
            </div>
            <div className="my-4">
                <span className="text-black">Don't have an Account? <a href="/register" className="text-pink">Create New</a></span>
            </div>
        </div>
        </div>
    )
}

export default LoginMain;