import React from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  render() {
    return (
      <div className="post-container">
        {this.props.data.map(post => {
          return (
            <>
              <header>
                <img src={post.thumbnailUrl} alt="thumbnail" />
                <h3> {post.username}</h3>
              </header>
              <img src={post.imageUrl} alt="postedPic" />
              <section className="likebar">{post.likes}</section>
              <CommentSection
                timestamp={post.timestamp}
                comments={post.comments}
              />
            </>
          );
        })}
      </div>
    );
  }
}

export default PostContainer;
