import React from "react";  

import "./footer-bottom.css"
import playstore from "../../asset/playstore.webp"
const FooterBottom = () =>{

    const links=[
        {
            heading:"About Us",
            items:[
                "About Coffeee",
                "Company Information",
                "News & Media",
                "Career OPportunities",
                "Code of Conduct"
            ], 
        },
        {
            heading:"Order",
            items:[
                "Shipping Information",
                "Cancellation & Returns",
                "Faq's",
                "Bulk Orders"
            ], 
        },
        {
            heading:"Here to Help",
            items:[
                "Contact Us",
                "Complaints & Feedback",
                "Sitemap",
                "Find Coffeee Store",
                "We help you buy"
            ], 
        },
        {
            heading:"Shopping Policies",
            items:[
                "Safe & Secured Shipping",
                "Privacy Policy",
                "Terms of Use",
                "Disclaimer",
            ], 
        },
]

    return (
        <section className="footer-bottom-main container">
           <div className="row">
           <div className="footer-left col-md-9">
                <div className="footer-links-main">
                    <div className="row">
                    {links.map(link=>{
                                return(
                                    <div className="col-md-3">
                           
                                        <h3 className="footer-heading">{link.heading}</h3>
                                        <ul>
                                            {link.items.map(item=>{
                                                return(
                                                    
                                                    <li className="footer-list-item"><a href="/#">{item}</a></li>
                                                        
                                                    
                                                )
                                            })}
                                           
                                        </ul>
                                    </div>
                                )
                            })}
                        
                    </div>
                </div>
                <div className="footer-icons">
                    <ul class="horizontal-sprites">
                        <li class="aramex"><a href="/#"></a></li>
                        <li class="mastercard"><a href="/#"></a></li>
                        <li class="paypal"><a href="/#"></a></li>
                        <li class="visa"><a href="/#"></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-right col-md-3">
                <div className="top">
                    <h3 className="footer-heading">Download our amazing app</h3>
                    <div>
                        <img src={playstore} alt="playstore" className="img-size"></img>
                    </div>
                </div>
                <div className="bottom">
                    <p>Connect us on:</p>
                    <span><i class="bi bi-twitter"></i></span>
                    <span><i class="bi bi-facebook"></i></span>
                    <span><i class="bi bi-youtube"></i></span>
                    <span><i class="bi bi-instagram"></i></span>

                </div>
            </div>
           </div>
        </section>
    )
}

export default FooterBottom;