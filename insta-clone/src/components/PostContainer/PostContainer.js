import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

class PostContainer extends React.Component {
  state = {
    likes: this.props.likes
  };

  addLike = e => {
    e.preventDefault();
    const newLike = {
      likes: this.state.likes + 1
    };
    this.setState({ newLike });
  };
  clickHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
                  <div className="likesIcons">
                    <div
                      className="heartButton"
                      name="newlike"
                      onClick={this.clickHandler}
                      value={this.state.newlike}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </div>

                    <div>
                      <FontAwesomeIcon icon={faComment} />
                    </div>
                  </div>

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
                  <div className="likesIcons">
                    <div
                      className="heartButton"
                      name="newlike"
                      onClick={this.clickHandler}
                      value={this.state.newlike}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </div>

                    <div>
                      <FontAwesomeIcon icon={faComment} />
                    </div>
                  </div>
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
