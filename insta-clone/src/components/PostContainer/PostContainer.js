import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
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

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailUrl: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  )
};

export default PostContainer;
