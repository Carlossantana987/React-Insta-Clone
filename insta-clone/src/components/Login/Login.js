import React from "react";
import "./Login.scss";
import instagramLogo from "./instagramLogo.png";
import { Button, Form, FormGroup, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitUsername = () => {
    const userSubmit = this.state.username;
    localStorage.setItem("username", userSubmit);
    window.location.reload();
  };

  render() {
    return (
      <Form className="loginForm">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <img src={instagramLogo} alt="instagramTitle" />
          <Input
            className="usernameInput"
            name="username"
            type="text"
            placeholder="username"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            className="passwordInput"
            name="password"
            type="text"
            placeholder="password"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <Button onClick={this.submitUsername}>Log In</Button>
      </Form>
    );
  }
}

export default Login;
