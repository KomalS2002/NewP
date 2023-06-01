import "./login.css";

export default function Login() {
  return (
    <div className="login">
     <div className="loginWrapper">
        <div className="loginLeft">
           <img className="loginImg" src="/assets/Wavy_Eco-08_Single-12.jpg" alt="" />
         </div>
        <div className="loginRight">
            <span className="loginTitle">Getting Started!</span>
            <div className="inputs">            
            <input type="text" className="loginInput" placeholder="username"/>
            <br />
            <input type="text" className="loginInput" placeholder="email" />
            <br />
            <input type="password" className="loginInput" placeholder="password"/>
            <br />
            <input type="Password" className="loginInput" placeholder="confirm password" />
            <br />
            </div>
            <div className="loginButtons">
            <button className="loginSubmit">Login</button>
            <br />
            <span className="loginSpan">Don't have an account ?</span>
            <br />
            <button className="Register">Register</button>
            </div>

        </div>
     </div>
    </div>
  )
}
