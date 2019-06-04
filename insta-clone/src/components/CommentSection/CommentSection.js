import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
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
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};
export default CommentSection;
