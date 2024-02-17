import React from "react";  
import image1 from "../../asset/image1.jpg";
// import image2 from "../../asset/image2.jpg";
import image3 from "../../asset/image3.jpg";
import image4 from "../../asset/image4.jpg";
import "./footer-top.css"
const FooterTop =() =>{

const features = [
    {
        icon:image1,
        title:"100 % Secure Payment",
        subtitile:"Moving your card details to a much more secured place"
    },
    {
        icon:image4,
        title:"Trust pay",
        subtitile:"Payment Protection. Easy Reutrn Policy"
    },
    {
        icon:image3,
        title:"Help Center",
        subtitile:"Look no further. Browse our FAQs or submit your query here."
    },
    {
        icon:image4,
        title:"Easy Installment",
        subtitile:"Pay to your purchase in easy EMI at very low interest rates"
    },
]
    return (
        <section className="footer-top-main container">
            <div className="row">
                {features.map(feature=>{
                    return(
                        <div className="col-md-3 feature-main">

                           <div>
                                <img src={feature.icon} alt="payment method" className="feature-image"></img>
                            </div> 
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature.subtitle">{feature.subtitile}</p>

                        </div>   
                    )
                })}
            </div>

        </section>
    )
}

export default FooterTop;