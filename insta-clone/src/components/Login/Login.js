import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <form>
        <input className="usernameInput" type="text" />
        <input className="passwordInput" type="text" />
      </form>
    );
  }
}

export default Login;
