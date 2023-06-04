import { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick =(e)=>{
    e.preventDefault()
    console.log("clicked");
  }
  return (
    <div className="login">
     <div className="loginWrapper">
        <div className="loginLeft">
           <img className="loginImg" src="/assets/Wavy_Eco-08_Single-12.jpg" alt="" />
         </div>
        <div className="loginRight">
            <span className="loginTitle">Getting Started!</span>
            <form action="" className="loginBox" onSubmit={handleClick}>
            <div className="inputs">            
            <input type="text" className="loginInput" placeholder="username"/>
            <br />
            <input type="email" className="loginInput" placeholder="email" required ref={email} />
            <br />
            <input type="password" className="loginInput" placeholder="password" required ref={password} minLength="8"/>
            <br />
            </div>
            <div className="loginButtons">
            <button className="loginSubmit">Login</button>
            <br />
            <span className="loginSpan">Don't have an account ?</span>
            <br />
            <button className="Register">Register</button>
            </div>
            </form>
        </div>
     </div>
    </div>
  )
}
