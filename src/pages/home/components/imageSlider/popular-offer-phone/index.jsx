import React from "react";

import "./popular-offer-phone.css"
import PhoneProduct from "../../../../../common/componenet/phone-product";

import { samplePhone } from "../../../../../common/constant/samplePhone";

const PopularPhone = () =>{
    return(
            <div className="popular-mobile-main">
               <div className="row">
                {samplePhone.map(phone=>{
                    return <PhoneProduct productData={phone} key={phone.id}/>
                })}
               </div>
            </div>
    )

}

export default PopularPhone;