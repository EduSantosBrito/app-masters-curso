import React from "react";
import Avatar from "../../shared/Avatar";
import "./Comment.css";
const Comment = props => {
  return (
    <div className="commentBox">
      <Avatar
        image={props.image}
        alt="Foto do comentário"
        author={props.author}
      />
      <p className="content-box content-box--comment content-box--white">
        {props.comment}
      </p>
    </div>
  );
};

export default Comment;
