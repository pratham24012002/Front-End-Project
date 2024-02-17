import React from "react";

import "./register.css";
import Banner from "../../../common/componenet/banner";
import RegisterMain from "./register-main";

const Register = () =>{
    return(
        <div className="register-page">
            <Banner/>
            <RegisterMain/>
        </div>
    )
}

export default Register;