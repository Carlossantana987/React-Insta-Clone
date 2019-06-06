import React from "react";
import styled from "styled-components";
import "./CommentSection.scss";

const CommentWrapper = styled.div`
  margin: 1% 0%;
  display: flex;
`;

const UsersName = styled.div`
  font-weight: 900;
  margin: 0px 5px 0px 0px;
`;

const CommentText = styled.div`
  font-weight: 500;
`;

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
            <CommentWrapper>
              <UsersName>{comment.username}</UsersName>
              <CommentText> {comment.text}</CommentText>
            </CommentWrapper>
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
