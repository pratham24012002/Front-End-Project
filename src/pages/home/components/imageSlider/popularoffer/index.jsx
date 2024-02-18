import React from "react";
import "./popular-offer.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PopularPhone from "../popular-offer-phone";

import { Navigator, useNavigate } from "react-router-dom";
const Popularoffer = () =>{
    const Navigator=useNavigate();
    const goToProductList=()=>{
        Navigator("/product")
    }
    return(
        <div className="container"> 
            <div className="main-offer">
                <div className="top-part">
                    <div className="offer-heading">
                        <h2>Popular Mobile offers</h2>
                        <div>
                            <button className="sub-btn py-1 px-2 mx-3" onClick={goToProductList}>View All</button>
                        </div>
                    </div>
                    <div className="product-price">
                    <Tabs
                        defaultActiveKey="100000"
                        id="justify-tab-example"
                        className="mb-3"
                        
                    >
                        <Tab eventKey="100000" title="Under Rs. 10,000">
                           <PopularPhone/>
                        </Tab>
                        <Tab eventKey="15000" title="Rs. 10,000-Rs. 15,000">
                            <PopularPhone/>
                        </Tab>
                        <Tab eventKey="25000" title="Rs. 15,000-Rs. 25,000">
                            <PopularPhone/>
                        </Tab>
                        <Tab eventKey="50000" title="Rs. 25,000-Rs. 50,000" >
                            <PopularPhone/>
                        </Tab>
                        <Tab eventKey="above" title="Above Rs. 50,000" >
                            <PopularPhone/>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popularoffer;