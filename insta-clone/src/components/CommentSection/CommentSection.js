import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => (
        <div className="comment">
          <h5>{comment.username}</h5>
          {comment.text}
        </div>
      ))}
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
