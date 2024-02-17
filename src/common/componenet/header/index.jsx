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
                    <div class="input-group  d-flex margin-top">
                        <input type="text" class="form-control input-area " placeholder="Search product and brand" aria-label="Search product and brand" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary px-10" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
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