import React from "react";
import "./register-main.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const RegisterMain = () =>{
    return (
        <div className="register-main">
            <div className="register-container">
            <h1 className="main-heading">Create Account </h1>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Pratham" required/>    
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                <Form.Control type="number" placeholder="90000000" required/>    
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" required/>    
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Date of birth" className="mb-3">
                <Form.Control type="date" placeholder="DD MM YYYY" required/>    
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="************" required/>    
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Confirm Password" className="mb-3">
                <Form.Control type="password" placeholder="************" required/>    
            </FloatingLabel>
            <div className="my-4">
                <button className="btn sign-in">Create Account</button>
            </div>
            <div className="my-4">
                <span className="text-black">Already have an Account? <a href="/login" className="text-pink">Login here</a></span>
            </div>
        </div>
        </div>
    )
}

export default RegisterMain;