import React, { Component } from "react";
import "./Post.css";
import Avatar from "../../shared/Avatar";
import Comment from "../Comment/index";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  addLike() {
    this.setState({ likes: this.state.likes + 1 });
  }
  render() {
    return (
      <div className="content-box content-box--gray">
        <Avatar
          image={this.props.image}
          alternativeText="Author"
          author={this.props.author}
          created_at={this.props.created_at}
        />
        <p className="content-box content-box--white">{this.props.text}</p>
        {this.props.comments.map((comment, index) => {
          return (
            <Comment
              key={"comment" + index}
              author={comment.author}
              comment={comment.comment}
              image={comment.image}
            />
          );
        })}
        <div className="post-interact">
          <div className="post-like">
            <button className="post-button" onClick={this.addLike.bind(this)}>
              Curtir
            </button>
            <p>{this.state.likes} curtidas</p>
          </div>
          <div className="post-comment">
            <input className="post-input" />
            <button className="post-button">Comentar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
