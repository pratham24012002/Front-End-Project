import React from "react";
import Header from "../../common/componenet/header";
import "./home.css"
import Navbarmain from "../../common/componenet/navbar";
import ImageSlider from "./components/imageSlider";
import Popularoffer from "./components/imageSlider/popularoffer";
import Footer from "../../common/componenet/footer";

const Home = () =>{

    return(
        <div>
            <Header/>
            <Navbarmain/>
            <ImageSlider/>
            <div className="product-body">
                <Popularoffer/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Home;