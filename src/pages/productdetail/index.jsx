import React from "react";
import "./product-detail.css"
import Header from "../../common/componenet/header";

import Footer from "../../common/componenet/footer";
import Navbarmain from "../../common/componenet/navbar";
import BreadCrumb from "./Component/breadcrumb";
import ShareButton from "../../common/componenet/sharebutton";
import ProductDetailSeaction from "./Component/product-detail-section";
const ProductDetail=()=>{
    return(
        <div className="product-detail-main">
            <Header />
            <Navbarmain/>
            <div className="body-main">
                <div className="container">
                    <BreadCrumb/>
                    <div className="product-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                   s
                                </div>
                                <div className="col-md-6">
                                    <ProductDetailSeaction/>
                                </div>
                                <div className="col-md-1"> 
                                    <ShareButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default ProductDetail