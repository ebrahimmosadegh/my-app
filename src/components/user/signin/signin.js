import React from "react";
import reactapplogo from '../../../assets/images/reactapp-logo.png';
import './signin.css'
import Button from "../../UI/button/button";
const SignIn = (props)=>{
    // <React.Fragment>
        return(
        <div>
        <img src={reactapplogo} alt="react app" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <Button btnType="danger">login</Button>
        </div>
        )
    {/* </React.Fragment> */}
}
export default SignIn;