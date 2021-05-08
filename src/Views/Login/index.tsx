import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h3>Login</h3>
      <div className="login-title">
        <p className="font-bold">Login to your</p>
        <p>Zoya's Pantry account</p>
      </div>
      <form id="login-form">
        <div className="login-form">
          <div className="login-username">
            <label htmlFor="email" className="user-details">
              Email address *
            </label>
            <input
              value={email}
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-password">
            <label htmlFor="password" className="user-details">
              Password *
            </label>
            <input
              value={password}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot font-bold">
              <Link to="/my-account/forgot-passsword">Forgot password</Link>
            </div>
          </div>
        </div>
        <Button link={"#"} text={"Login"} width={340} />
        <div className="create-account font-bold">
          <Link to="/register">Create an account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
