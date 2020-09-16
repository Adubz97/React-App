import React, { Component } from "react";

export default class FrontCard extends Component {
  render() {
    return (
      <div
        className="card-front"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        {/* <img src={`${this.props.image}`} /> */}
      </div>
    );
  }
}
