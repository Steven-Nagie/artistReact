import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";

// Components
import Home from "./components/Home";
import Hero from "./components/Hero";
import Select from "./components/Select";

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById('react-node');

  if(reactNode) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="select" component={Select}/>
        <Route path="artist/:artistId" component={Hero}/>
      </Router>,
      reactNode
    )
  }
});
