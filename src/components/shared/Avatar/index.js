import React, { Component } from "react";
import "./Avatar.css";

export default class Avatar extends Component {
  render() {
    return (
      <div className="avatarBox">
        <div>
          <img
            src={this.props.image}
            className="authorImage"
            alt={this.props.alternativeText}
          />
        </div>
        <div>
          <p className="content-title">{this.props.author}</p>
          <p className="content-title">{this.props.created_at}</p>
        </div>
      </div>
    );
  }
}
