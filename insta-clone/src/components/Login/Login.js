import React from "react";

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
    localStorage.setItem("userSubmit", userSubmit);
  };

  render() {
    return (
      <form onSubmit={this.userSubmit}>
        <input
          className="usernameInput"
          name="username"
          type="text"
          placeholder="username"
          onChange={this.handleInputChange}
        />
        <input
          className="passwordInput"
          name="password"
          type="text"
          placeholder="password"
          onChange={this.handleInputChange}
        />
        <button classNmae="loginButton" onClick={this.submitUsername}>
          Login
        </button>
      </form>
    );
  }
}

export default Login;
