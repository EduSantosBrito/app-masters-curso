import React from "react";
import "./Post.css";
import Avatar from "../../shared/Avatar";
import Comment from "../Comment/index";
const Post = props => {
  return (
    <div className="content-box content-box--gray">
      <Avatar
        image={props.image}
        alternativeText="Author"
        author={props.author}
        created_at={props.created_at}
      />
      <p className="content-box content-box--white">{props.text}</p>
      {props.comments.map((comment, index) => {
        return (
          <Comment
            key={"comment" + index}
            author={comment.author}
            comment={comment.comment}
            image={comment.image}
          />
        );
      })}
      <input className="content-input" />
      <button className="content-button">Comentar</button>
    </div>
  );
};

export default Post;
