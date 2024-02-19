import React from "react";

import "./popular-offer-phone.css"
import PhoneProduct from "../../../../../common/componenet/phone-product";

import { phoneProducts} from "../../../../constant/phoneproducts";
const PopularPhone = () =>{
    return(
            <div className="popular-mobile-main">
               <div className="row">
                {phoneProducts.map(phone=>{
                    return <PhoneProduct productData={phone} key={phone.id}/>
                })}
               </div>
            </div>
    )

}

export default PopularPhone;