import React from "react";
import "./banner.css";
import images from "../../asset/images.jpg"
import Logo from "../../logo";

const Banner =() =>{
    return(
        <div className="app-banner">
            <div className="left-container">
                <Logo lightmode/>
                <img src={images} alt="banner" />
                <div className="banner-text">
                    This is india largest mobile E-commerce company
                </div>
            </div>
        </div>
        
    )
}

export default Banner;