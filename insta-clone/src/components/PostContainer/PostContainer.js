import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log(props);
  return (
    <div className="postContainerComp">
      {props.post.map(posting => (
        <div>
          <div className="profileTag">
            <img src={posting.thumbnailUrl} alt="profile-pic" />
            <div> {posting.username}</div>
          </div>
          <img src={posting.imageUrl} alt="posted-pic" />
          <div>{posting.likes} likes</div>
          <div>{posting.timestamp}</div>
          <div>
            <CommentSection comments={posting.comments} />
          </div>
          <input type="text" placeholder="Add Comment" />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
