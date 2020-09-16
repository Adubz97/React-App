import React, { Component } from "react";
import FrontCard from "./FrontCard.js"
import BackCard from "./BackCard.js"
import { render } from "react-dom";


export default class MusicCard extends Component {
  render() {

    return (
      <div className="music-card">
        <FrontCard image={this.props.song.image} />

        <BackCard
          title={this.props.song.title}
          artist={this.props.song.artist}
          />
      </div>
    )
  }
}