import React from "react";

const CommentSection = props => {
  return (
    <div className="commentSectionComp">
      <img src={comments.thumbnailUrl} alt="profile-pic" />
      <div>{comments.comments}</div>
    </div>
  );
};

export default CommentSection;
