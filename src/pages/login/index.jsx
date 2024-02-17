import React from "react";
import Banner from "../../common/componenet/banner";
import LoginMain from "./componenets/login-main";
import "./login.css";

const Login = () =>{
    return(
        <div className="login-page">
            <Banner/>
            <LoginMain/>
        </div>
    )
}

export default Login;