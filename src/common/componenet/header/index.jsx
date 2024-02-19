import React from "react";
import "./header.css"
import Logo from "../../logo";
import cartIcon from "../../asset/cart.svg"
import userIcon from "../../asset/user.svg"
import { useNavigate } from "react-router-dom";
 const Header = () =>{
    const navigate= useNavigate()
    const goToLogin =() =>{
        navigate("/login")
    }
    return(
        <div className="container">
            <div className="main-header my-15">
                <div className="left-part">
                    <Logo/>
                    <div className='input-group mx-4'>
                        <input
                            type='text'
                            className='form-control custom-width'
                            placeholder='Search for  product, brands or more…'
                        />
                        <span className='input-group-text sub-btn' id='basic-addon2'>
                            <i className='bi bi-search'></i>
                        </span>
                    </div>
                </div>
                <div className="right-part">
                    <div className="header-icon cursor-pointer">
                        <img src={cartIcon} alt="cart"></img>
                        <span className="header-text">Cart</span>
                    </div>
                    <div className="header-icon margin-left cursor-pointer" onClick={goToLogin}>
                        <img src={userIcon} alt="user-icon"></img>
                        <span className="header-text">Login/Signup</span>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default Header;