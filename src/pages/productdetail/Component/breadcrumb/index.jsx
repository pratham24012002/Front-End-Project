import React from "react";  
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./breadcrumb.css"
const BreadCrumb=()=>{
    return(
        <div className="custom-breadcrumb">
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Samsung
                </Breadcrumb.Item>
                <Breadcrumb.Item >Mobile Phone</Breadcrumb.Item>
                <Breadcrumb.Item active>Galaxy Note 2</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumb