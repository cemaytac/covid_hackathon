import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    invite: "",
    zipcode: '',
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf,
      // invite,
      zipcode } = this.state;
    return !(name && email && password === passwordConf) && zipcode;
  }

  render() {
    const { name, email, password, passwordConf,
      // invite,
      zipcode } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <label htmlFor="confirm">Confirm Password</label>
          {/* <input
            type="password"
            autoComplete="off"
            id="invite"
            value={invite}
            name="invite"
            onChange={this.handleChange}
          />
          <label htmlFor="invite">Invite</label> */}
          <input
            type="text"
            autoComplete="off"
            id="zipcode"
            value={zipcode}
            name="zipcode"
            onChange={this.handleChange}
          />
          <label htmlFor="zipcode">Zip Code</label>
          <button disabled={this.isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;
