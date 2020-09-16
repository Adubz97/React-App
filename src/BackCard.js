import React, { Component } from "react";

export default class BackCard extends Component {
  render() {
    return (
      <div className="card-back">
        <p className="title">{this.props.title}</p>
        <p className="title">{this.props.artist}</p>
      </div>
    );
  }
}
