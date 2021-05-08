import React, { useState } from "react";
import Button from "../../Components/Button";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  return (
    <div className="forgot-password-container">
      <h3>Login</h3>
      <div className="forgot-password-title">
        <p>Forgot your password?</p>
        <p>Please enter your email</p>
        <p>You will receive a link to create a new password via email.</p>
      </div>
      <form id="forgot-password-form">
        <div className="forgot-password-form">
          <div className="forgot-password-username">
            <label htmlFor="username-or-email" className="user-details">
              Username or Email
            </label>
            <input
              value={usernameOrEmail}
              type="text"
              id="username-or-email"
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
          </div>
        </div>
        <Button link={"#"} text={"Reset password"} width={363} />
      </form>
    </div>
  );
}

export default ForgotPassword;
