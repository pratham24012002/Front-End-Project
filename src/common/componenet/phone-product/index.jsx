import React from "react";
import "./phone-product.css"

import { useNavigate } from "react-router-dom";

const PhoneProduct=(props)=>{

    const navigate=useNavigate();

    const goToProductDetail=()=>{
        const prodName=phoneName.replaceAll(" ","-")
        navigate(`/product/${prodName}/${id}`)
    }

    const {productData}=props;
    const {imageName,cashback,phoneName,currentPrice,discountPrice,discount,phoneEmi,id}=productData;
    return(
        <div className="phone-product col" onClick={goToProductDetail}>
        <div className="phone-image">
            <img src={imageName} alt="phone 1" className="phone-img"/>
        </div>
        <div className="phone-cashback">
           {cashback}
        </div>
        <div className="phone-name">
            {phoneName}
        </div>
        <div className="phone-price">
            <div className="current-price">{currentPrice}</div>
            <div className="discounted-price">{discountPrice}</div>
            <div className="discount">{discount}</div>
        </div>
        <div className="phone-emi">
            {phoneEmi}
        </div>
        </div>
    )
}

export default PhoneProduct