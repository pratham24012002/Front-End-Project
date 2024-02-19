import React from "react";  
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from "react-router-dom";
import "./breadcrumb.css"
const BreadCrumb=(props)=>{
    const navigate=useNavigate()
    const goToHome=()=>{
        navigate('/')
    }
    const {productDetail}=props
    const{
        brand="",
        phoneName=""
    }=productDetail
    return(
        <div className="custom-breadcrumb">
            <Breadcrumb>
                <Breadcrumb.Item href="#" onClick={goToHome}>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    {brand}
                </Breadcrumb.Item>
                <Breadcrumb.Item >Mobile Phone</Breadcrumb.Item>
                <Breadcrumb.Item active>{phoneName}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumb