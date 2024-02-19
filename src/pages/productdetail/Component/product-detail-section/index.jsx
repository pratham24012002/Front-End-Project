import React from "react";

import "./product-detail-section.css"
import returnIcon from "../../../../common/asset/return.svg";
import cancellationIcon from "../../../../common/asset/cancel.svg";
import truckIcon from "../../../../common/asset/truck.svg";
import bankIcon from "../../../../common/asset/bank.svg"
import OffersIcon from "../../../../common/asset/offers";
import CartIcon from "../../../../common/asset/cart";
import checkIcon from "../../../../common/asset/checkIcon.svg"
import ColorPicker from "../color-picker"


const ProductDetailSeaction= (props)=>{
    const {productDetail}=props;
    const{
        phoneName="",
        cashback="",
        currentPrice="",
        discountPrice="",
        discount="",
        phoneEmi="",
        availableColors=[],
        keyFeatures=[],
    }=productDetail

    return(
        <div className="product-section-main">
            <h1 className="product-title">{phoneName}</h1>
            <div className="key-features">
                <p>Key Features</p>
                <ul>
                    {keyFeatures.map(feature=>{
                        return(
                            <li>
                                 <img src={checkIcon} alt='check icon' />
                                <span className='mx-2'>{feature}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='color-picker section-gap'>
                <h3 className='color-heading'>Choose Color</h3>
                <div className="d-flex">
                {availableColors.map(color => {
                        return <ColorPicker color={color}  />;
                    })}
               
                </div>
            </div>
            <div className="quantity">
                <label>Select Qty.</label>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className='prices-and-taxes section-gap'>
                <div className='d-flex align-items-center justify-space-between'>
                    <div className='current-price'>{currentPrice}</div>
                    <div className='original-price mx-2 text-overline'>{discountPrice}</div>
                    <div className='discount mx-1'>{discount}</div>
                </div>
                <div className='bottom-part'>Inclusive of all taxes</div>
            </div>
            <div className='other-details section-gap'>
                <div>
                    <img src={bankIcon} alt='bank icon' />
                    <span className='mx-3'>
                        No cost {phoneEmi}. Standard EMI also available. T&C
                    </span>
                </div>
                <div>
                    <OffersIcon color='black' height='16' width='16' />
                    <span className='mx-3'>
                        Bank Offer get {cashback} on Flipkart Axis Bank Credit Card.
                        T&C
                    </span>
                </div>
            </div>
            <div className='add-to-cart section-gap'>
                <button className='add-to-card-btn btn flex align-items-center'>
                    <CartIcon color='white' />
                    <span className='mx-3'>Add to Cart</span>
                </button>
            </div>
            <div className='section-gap quick-policies d-flex justify-space-between align-items-center'>
                <div className='d-flex align-items-start '>
                    <img src={truckIcon} alt='truck icon' />
                    <div className='mx-2'>
                        <span>Shipping Fee</span>
                        <div className='policy-value'>FREE</div>
                    </div>
                </div>
                <div className='d-flex align-items-start mx-3'>
                    <img src={returnIcon} alt='return icon' />
                    <div className='mx-2'>
                        <span>Return Policy</span>
                        <div className='policy-value'>30 DAYS</div>
                    </div>
                </div>
                <div className='d-flex align-items-start  mx-3'>
                    <img src={cancellationIcon} alt='cancellation icon' />
                    <div className='mx-2'>
                        <span>Cancellation</span>
                        <div className='policy-value'>ALLOWED</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailSeaction