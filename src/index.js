import React from "react";
const { Component } = React;
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import Artists from "./Artist";
import Albums from "./Album";

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      artists: [],
    };
  }
  async componentDidMount() {
    const albums = await (await axios.get("/api/albums")).data;
    const artists = await (await axios.get("/api/artists")).data;
    this.setState({ albums });
    this.setState({ artists });
  }
  render() {
    const { albums, artists } = this.state;
    return (
      <Router>
        <div>
          <nav>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/artists">{`Artists (${artists.length})`}</a>
            </p>
            <p>
              <a href="/albums">{`Albums (${albums.length})`}</a>
            </p>
          </nav>
          <Route path="/artists" component={Artists} />
          <Route path="/albums" component={Albums} />
        </div>
      </Router>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
