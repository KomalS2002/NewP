import React, { useRef } from "react";
import "./register.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Register (){
const username = useRef();
const email = useRef();
const password = useRef();
const confirmPassword = useRef();
const navigate = useNavigate();

const handleSubmit=async(e)=>{
e.preventDefault();
if(confirmPassword.current.value !== password.current.value){
   password.current.setCustomValidity("passwords don't match !")
}
else{
const user ={
    username:username.current.value,
    email:email.current.value,
    password:password.current.value
};
try{
await axios.post("/auth/register", user);
navigate("/login");
}catch(err){
    console.log(err);
}
console.log(user);
}
}

return (
<div className="reg-background">
    <div className="overlay">
    <div className="container">
    <div className="head">Getting Started</div>
    <form action="" className="loginBox" onSubmit={handleSubmit}>
                       
            <input type="text" className="loginInput" placeholder="username" required ref={username}/>
            <br />
            <input type="email" className="loginInput" placeholder="email" required ref={email} />
            <br />
            <input type="password" className="loginInput" placeholder="password" required ref={password} minLength="8"/>
            <br />
            <input type="password" className="confirmPassword"  placeholder="re-enter password" required ref={confirmPassword}/>
            <br />
            <div className="loginButtons">
            <button className="loginSubmit" type="submit">Register</button>
            <br />
            <span className="loginSpan">already have an account ?</span>
            <br />
            <button className="Register">Login</button>
            </div>
            </form>
    </div>
    </div>
</div>
);
}
export default Register;