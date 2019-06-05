import React from "react";
import "./CommentSection.scss";

class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    newComment: " "
  };
  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "Carlos santana",
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: " "
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
        {this.props.comments.map(comment => {
          return (
            <>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </>
          );
        })}
        <p className="timestamp">{this.props.timestamp}</p>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="newComment"
            value={this.state.newComment}
            onChange={this.changeHandler}
            placeholder="add a comment..."
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
