import React from "react";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}
export default App;
