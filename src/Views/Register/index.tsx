import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="register-container">
      <h3>Register</h3>
      <div className="register-title">
        <p className="font-bold">Register an account</p>
        <p>and join our community</p>
      </div>
      <form id="register-form">
        <div className="register-form">
          <div className="register-user">
            <div className="input-field">
              <label htmlFor="firstName" className="userDetails">
                First Name *
              </label>
              <input
                value={firstName}
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName" className="userDetails">
                Last Name *
              </label>
              <input
                value={lastName}
                type="lastName"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="register-user">
            <div className="input-field">
              <label htmlFor="email" className="userDetails">
                Email address *
              </label>
              <input
                value={email}
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="userDetails">
                Password *
              </label>
              <input
                value={password}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <Button text={"Sign up"} width={340} />
      <div className="sign-up">
        <p>Already have an account?</p>
        <Link className="font-bold" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
