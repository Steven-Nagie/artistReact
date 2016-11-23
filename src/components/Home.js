import React from "react";
import {browserHistory, Link} from "react-router";

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <Link to="select">Let's begin</Link>
      </div>
    )
  }
}
