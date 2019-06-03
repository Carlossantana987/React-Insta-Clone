import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="postContainerComp">
      {props.post.map(posting => (
        <div>
          <img src={posting.thumbnailUrl} alt="profile-pic" />
          <div> {posting.username}</div>
          <img src={posting.imageUrl} alt="posted-pic" />
          <div>{posting.likes} likes</div>
          <div>{posting.timestamp}</div>
          <div>
            <CommentSection />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
