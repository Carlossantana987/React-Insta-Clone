import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

import "./PostContainer.scss";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1% auto;
`;

const TopPostPic = styled.div`
  margin: 5% 2% 2%;
  display: flex;
  align-items: center;
`;

const ThumbnailPic = styled.img`
  width: 5%;
  height: 8%;
  border-radius: 100%;
`;

const TopUsername = styled.h3`
  margin: 0% 1%;
`;

const BelowPostPic = styled.div`
  margin: 0% 2%;
`;

const LikeIcons = styled.div`
  display: flex;
`;

const HeartButton = styled.div`
  padding: 1% 0%;
  width: 6%;
`;

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
      <PostWrapper>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <>
                  <TopPostPic>
                    <ThumbnailPic src={post.thumbnailUrl} alt="thumbnail" />
                    <TopUsername>{post.username}</TopUsername>
                  </TopPostPic>

                  <img src={post.imageUrl} alt={post.id} />

                  <BelowPostPic>
                    <LikeIcons>
                      <HeartButton
                        name="newlike"
                        onClick={this.clickHandler}
                        value={this.state.newlike}
                      >
                        <FontAwesomeIcon icon={faHeart} size="2x" />
                      </HeartButton>

                      <HeartButton>
                        <FontAwesomeIcon icon={faComment} size="2x" />
                      </HeartButton>
                    </LikeIcons>

                    <section className="likebar">{post.likes} likes</section>

                    <CommentSection
                      comments={post.comments}
                      timestamp={post.timestamp}
                    />
                  </BelowPostPic>
                </>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <TopPostPic>
                    <ThumbnailPic src={post.thumbnailUrl} alt="thumbnail" />
                    <TopUsername>{post.username}</TopUsername>
                  </TopPostPic>

                  <img src={post.imageUrl} alt={post.id} />

                  <BelowPostPic>
                    <LikeIcons>
                      <HeartButton
                        name="newlike"
                        onClick={this.clickHandler}
                        value={this.state.newlike}
                      >
                        <FontAwesomeIcon icon={faHeart} size="2x" />
                      </HeartButton>

                      <HeartButton>
                        <FontAwesomeIcon icon={faComment} size="2x" />
                      </HeartButton>
                    </LikeIcons>

                    <section className="likebar">{post.likes} likes</section>

                    <CommentSection
                      comments={post.comments}
                      timestamp={post.timestamp}
                    />
                  </BelowPostPic>
                </>
              );
            })}
      </PostWrapper>
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
