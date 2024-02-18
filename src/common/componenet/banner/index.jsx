import React from "react";
import "./banner.css";
import topImage from "../../asset/mobile-large.svg"
import bottomImage from "../../asset/mobile-bottom.svg"
import Logo from "../../logo";

const Banner =() =>{
    return(
        <div className='app-banner'>
        <div className='padding-40'>
            <Logo lightmode />
            <img
                src={topImage}
                alt='moble icon'
                className='relative top70'
            />
            <img src={bottomImage} alt='moble icon' />
            <div className='banner-text'>
                India’s Leading Mobile Comparison Portal
            </div>
        </div>
    </div>
        
    )
}

export default Banner;