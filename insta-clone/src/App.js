import React from "react";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/Login/Login";
import withAuthenticate from "./authentication/withAuthenticate";

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
export default App;
