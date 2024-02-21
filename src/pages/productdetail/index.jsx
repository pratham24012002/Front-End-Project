import React,{useState,useEffect} from "react";
import "./product-detail.css"
import Header from "../../common/componenet/header";

import Footer from "../../common/componenet/footer";
import Navbarmain from "../../common/componenet/navbar";
import BreadCrumb from "./Component/breadcrumb";
import ShareButton from "../../common/componenet/sharebutton";
import ProductDetailSeaction from "./Component/product-detail-section";
import ProductPicture from "./Component/product-picture";
import { useParams } from "react-router-dom";
import { phoneProducts} from "../constant/phoneproducts";


const ProductDetail=()=>{

    const params = useParams();
    const { productId } = params;
    const [productDetail, setProductDetail] = useState({});

    const getProductDetails = productId => {
        const matchingProduct = phoneProducts.find(phoneData => {
            return phoneData.id === productId;
        });
        setProductDetail(matchingProduct);
    };

    useEffect(() => {
        getProductDetails(productId);
    }, [productId]);

    return(
        <div className="product-detail-main">
            <Header />
            <Navbarmain/>
            <div className="body-main">
                <div className="container">
                    <BreadCrumb productDetail={productDetail}/>
                    <div className="product-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                   <ProductPicture productImage={productDetail}/>
                                </div>
                                <div className="col-md-6">
                                    <ProductDetailSeaction productDetail={productDetail}/>
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