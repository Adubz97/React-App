import React, { Component } from "react";
import { render } from "react-dom";
import songs from "./Songs.js"
import MusicCard from "./MusicCard.js";
import FrontCard from "./FrontCard.js";
import BackCard from "./BackCard.js";

class MusicShowcase extends Component {

  render() {
    return (
      <div id="music-showcase">
        {songs.map(song => < MusicCard song={song} />)}
      </div>
    );
  }
}

export default MusicShowcase;