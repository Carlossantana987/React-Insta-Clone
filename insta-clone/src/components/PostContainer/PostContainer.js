import React from "react";
import PropTypes from "prop-types";
//import { faHeart } from "@fortawesome/free-regular-svg-icons";
//import { faComment } from "@fortawesome/free-regular-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  render() {
    return (
      <div className="post-container">
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })}
      </div>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.array.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  )
};
export default PostContainer;
