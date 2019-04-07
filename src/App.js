import React, { Component } from "react";

import Header from "./components/Header/";
import PostForm from "./components/Post/PostForm/";
import Post from "./components/Post/Post";
import loadingGif from "./assets/loading.gif";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  async getPosts() {
    await fetch("http://localhost:3001/posts?_sort=id&_order=DESC").then(
      response => {
        response.json().then(result => {
          this.setState({ posts: result });
        });
      }
    );
  }
  render() {
    return (
      <div className="content">
        <Header />
        <PostForm postCreated={this.getPosts.bind(this)} />
        {!this.state.posts ? (
          <div className="content-loading">
            <img src={loadingGif} alt="loading" />
          </div>
        ) : (
          this.state.posts.map(post => (
            <Post
              key={post.id}
              image={post.image}
              text={post.text}
              author={post.author}
              created_at={post.created_at}
              comments={post.comments}
            />
          ))
        )}
      </div>
    );
  }
}

export default App;
