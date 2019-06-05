import React from "react";
import "./CommentSection.scss";

class CommentSection extends React.Component {
  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          return (
            <>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </>
          );
        })}
        <p className="timestamp">{this.props.timestamp}</p>
        <input type="text" placeholder="add a comment..." />
      </div>
    );
  }
}

export default CommentSection;
