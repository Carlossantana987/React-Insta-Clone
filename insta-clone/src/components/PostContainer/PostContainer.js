import React from "react";
import "./PostContainer.scss";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Components {
  render() {
    return (
      <div className="post-container">
        {this.props.data.map(post => {
          return (
            <>
              <header>
                <img src={"post.thumbnailUrl"} alt="thumbnail" />
                <h3> {post.username}</h3>
              </header>
              <img src={"post.imgaUrl"} alt="main-image" />
              <section className="likebar">{post.likes}</section>
              <CommentSection />
            </>
          );
        })}
      </div>
    );
  }
}

export default PostContainer;
