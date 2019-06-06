import React from "react";
import "./CommentSection.scss";

class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "carlos",
      text: this.state.newComment
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="commentSection">
        {this.state.comments.map(comment => {
          return (
            <div className="commentWrapper">
              <div className="commentUsername">{comment.username}</div>
              <div className="commentText"> {comment.text}</div>
            </div>
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
