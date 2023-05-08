import React from "react";

function Register (){
return (
<div className="reg-background">
    <div className="overlay">
    <div className="container">
    <div className="head">Getting Started</div>
    <div className="inputs">
    <input type="text" placeholder="username" className="username"/>
    <input type="email" placeholder="email" name="email" id="" />
    <input type="password" placeholder="password" name="password" id="" />
    </div>
    <button className="signup">Sign Up</button>
    {/* <p className="or">OR</p> */}
    <button className="google">Sign In with Google</button>
    <p>Already have an account. <span>Sign In</span></p>
    </div>
    </div>
</div>
);
}
export default Register;