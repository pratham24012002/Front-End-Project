import React from "react";
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import "./product-main.css"

import { phoneProducts } from "../../../../constant/phoneproducts";
import PhoneProduct from "../../../../../common/componenet/phone-product";

const ProductMain=()=>{
    return(
        <div className="product-section-main">
            <div className="top-section">
                <div className="product-main-title">
                    <h3>All Mobile Phones</h3>
                </div>
                <div className="sort">
                    <label className="sort-by-label">Sort By</label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Price</option>
                        <option value="1">Price-Low to high</option>
                        <option value="2">Price-High to Low</option>
                        <option value="3">Price-Medium</option>
                    </Form.Select>
                </div>
            </div>
            <div className="bottom-section">
                <div className="row">
                {phoneProducts.map(phone=>{
                    return (
                        <div className="col-md-3">
                            <PhoneProduct productData={phone} key={phone.id}/>
                        </div>
                    )
                })}
                </div>
                <div className="custom-pagination">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item >{12}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Next />

                        </Pagination>
                </div>
            </div>
        </div>
    )
}

export default ProductMain;