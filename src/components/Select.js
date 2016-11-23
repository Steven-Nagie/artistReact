import React from "react";
import heroHelper from "../utils/heroHelper";
import jsonp from "jsonp";
import {Link} from "react-router";

import Artist from "./Artist.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    }
  }

  getHeroes() {
    return jsonp('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=50&country=US&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK', null, function(err, data) {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({
          artists: data.message.body.artist_list
        })
        console.log(this.state);
      }
    }.bind(this));
  }

  componentDidMount() {
    this.getHeroes();
  }

  render() {
    const artists = this.state.artists.map(artist => (
      <Link
        key={artist.artist.artist_id}
        to={"/artist/" + artist.artist.artist_id}
      >
        <Artist
          key={artist.artist.artist_id}
          id={artist.artist.artist_id}
          name={artist.artist.artist_name}
          country = {artist.artist.artist_country}
        />
      </Link>
    ));

    return(
      <div>{artists}</div>
    )
  }
}
