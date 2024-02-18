import React from "react";
import logo from "../../common/asset/logo.svg"
import "./logo.css"

import { useNavigate } from "react-router-dom";

const Logo = (props) =>{
  const {lightmode}=props
  const textcolor=lightmode?"white-color":"black-color";
  const navigate=useNavigate();
  const goToHomePage=()=>{
    navigate("/")
  }
  return (
    <div
            className='d-flex align-items-center cursor-pointer'
            onClick={goToHomePage}
        >
            <img src={logo} alt='logo of company coffeee' />
            <div className={`logo-text mx-2 ${textcolor}`}>Coffeee</div>
        </div>
  )
}

export default Logo;