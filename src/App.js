import React, { Component } from "react";

import Header from "./components/Header/";
import PostForm from "./components/Post/PostForm/";
import Post from "./components/Post/Post";
import "./App.css";

const post = {
  text:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero reprehenderit assumenda totam quo magni id commodi molestiae iusto sint sapiente incidunt laborum nam, maxime minus ipsa. Nihil, fugit quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero reprehenderit assumenda totam quo magni id commodi molestiae iusto sint sapiente incidunt laborum nam, maxime minus ipsa. Nihil, fugit quod.",
  author: "Linus Torvald",
  image:
    "https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
  created_at: "Ontem às 19:35",
  comments: [
    {
      image:
        "https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
      author: "Katia",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptate, id nam, quae aspernatur perspiciatis necessitatibus repellendus eos, reprehenderit nostrum fugit accusantium. Dicta deleniti repellat libero sunt necessitatibus impedit illo."
    },
    {
      image:
        "https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
      author: "Katia",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptate, id nam, quae aspernatur perspiciatis necessitatibus repellendus eos, reprehenderit nostrum fugit accusantium. Dicta deleniti repellat libero sunt necessitatibus impedit illo."
    }
  ]
};
class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <PostForm />
        <Post
          image={post.image}
          text={post.text}
          author={post.author}
          created_at={post.created_at}
          comments={post.comments}
        />
        <Post
          image={post.image}
          text={post.text}
          author={post.author}
          created_at={post.created_at}
          comments={post.comments}
        />
      </div>
    );
  }
}

export default App;
