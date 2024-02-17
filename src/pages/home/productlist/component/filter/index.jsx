import React from "react";
import Form from 'react-bootstrap/Form';
import "./filter.css"
import { brandOption } from "../../../../constant/brandOption";

const Filter = () =>{
    return (
        <div>
            <h3 className="filter-heading ">Filters</h3>
            <div className="filter-main">
            <div className="brands-filter">
                <div className="brand-top"> 
                    <h5 className="brand-heading">Brands</h5>
                    <a href="#/" className="brand-heading">View All</a>
                </div>
                <div className="brand-options">
                    
                        {brandOption.map(brand=>{
                            return(
                                <div className="brand-option">
                                    <div>
                                        <input type="checkbox" />
                                        <span className="pl-15">{brand.brandname}</span>
                                    </div>
                                    <div>
                                        {brand.price}
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <hr></hr>
            </div>
            <div className="price-filter">
                <h3 className="text-left price-title">Price</h3>
                <h1 className="price-range text-left">Rs 10,000 -25,000</h1>
                <div>
                    <Form.Range />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Filter;