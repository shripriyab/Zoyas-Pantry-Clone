import React, { Component } from "react";

import "./Register.css";

import { Link } from "react-router-dom";
import Button from "../../Components/Button";

interface RegisterProps {}

interface RegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default class Register extends Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    this.setState({
      [inputType]: e.target.value,
    } as Pick<RegisterState, keyof RegisterState>);
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
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
                  id="userDetails"
                  onChange={(e) => this.handleChange(e, "firstName")}
                />
              </div>
              <div className="input-field">
                <label htmlFor="lastName" className="userDetails">
                  Last Name *
                </label>
                <input
                  type="lastName"
                  id="userDetails"
                  onChange={(e) => this.handleChange(e, "lastName")}
                />
              </div>
            </div>
            <div className="register-user">
              <div className="input-field">
                <label htmlFor="email" className="userDetails">
                  Email address *
                </label>
                <input
                  value={firstName}
                  type="text"
                  id="userDetails"
                  onChange={(e) => this.handleChange(e, "email")}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password" className="userDetails">
                  Password *
                </label>
                <input
                  type="password"
                  id="userDetails"
                  onChange={(e) => this.handleChange(e, "password")}
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
}
