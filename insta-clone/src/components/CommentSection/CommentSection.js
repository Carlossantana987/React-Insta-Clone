import React from "react";
import "./CommentSection.scss";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      id: "",
      username: "",
      text: ""
    };
  }

  render() {
    return (
      <div>
        {props.comments.map(comment => (
          <div className="comment">
            <strong> {comment.username}</strong>
            {comment.text}
          </div>
        ))}
        <input type="text" placeholder="Add Comment" />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};
export default CommentSection;
