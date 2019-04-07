import React, { Component } from "react";
import "./PostForm.css";

let postSkeleton = {
  author: "Linus Torvald",
  image:
    "https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
  created_at: "Ontem às 19:35",
  comments: []
};

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }
  onContentChange(event) {
    const content = event.target.value;
    this.setState({ content });
  }
  createPost() {
    let newPost = {
      ...postSkeleton,
      text: this.state.content
    };
    fetch("http://localhost:3001/posts", {
      method: "post",
      mode: "cors",
      body: JSON.stringify(newPost),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      this.props.postCreated();
    });
  }
  render() {
    return (
      <div className="content-box content-box--gray">
        <h3 className="content-title">Postar agora</h3>
        <input
          className="content-input"
          value={this.state.content}
          onChange={this.onContentChange.bind(this)}
        />
        <button className="content-button" onClick={this.createPost.bind(this)}>
          Enviar
        </button>
      </div>
    );
  }
}

export default PostForm;
