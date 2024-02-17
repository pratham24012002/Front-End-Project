import React from "react";
import Header from "../../../common/componenet/header";
import Navbarmain from "../../../common/componenet/navbar";
import Footer from "../../../common/componenet/footer";

import "./product-list.css"
import Filter from "./component/filter";
import ProductMain from "./component/product-main";

const ProductList=()=>{
    return(
            <>
                <Header/>
                <Navbarmain/>
                <div className="body-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Filter/>
                            </div>
                            <div className="col-md-9">
                                <ProductMain />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
    )
}

export default ProductList;