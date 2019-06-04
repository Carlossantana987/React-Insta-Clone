import React from "react";

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
export default CommentSection;
