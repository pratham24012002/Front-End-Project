import React from "react";
import share from "../../asset/share.svg";
import "./sharebutton.css"
const ShareButton = () =>{
    return(
        <div>
            
            <button className="btn d-flex btn-share"><img src={share} alt="share"></img>
                <span className="mx-2">Share</span>
            </button>
        </div>
    )
}
export default ShareButton