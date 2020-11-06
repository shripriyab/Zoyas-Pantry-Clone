import React, { Component } from "react";

import "./Login.css";

import { Link } from "react-router-dom";
import Button from "../../Components/Button";

interface LoginProps {}

interface LoginState {
  email: string;
  password: string;
}

export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
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
    } as Pick<LoginState, keyof LoginState>);
  };

  render() {
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
              <label htmlFor="username" className="userDetails">
                Email address *
              </label>
              <input
                type="text"
                id="userDetails"
                onChange={(e) => this.handleChange(e, "email")}
              />
            </div>
            <div className="login-password">
              <label htmlFor="password" className="userDetails">
                Password *
              </label>
              <input
                type="password"
                id="userDetails"
                onChange={(e) => this.handleChange(e, "password")}
              />
              <div className="forgot font-bold">
                <Link to="/my-account/lost-passsword">Forgot password</Link>
              </div>
            </div>
          </div>
          <Button text={"Login"} width={340} />
          <div className="create-account font-bold">
            <Link to="/register">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}
