import { withRouter } from "react-router-dom";
import React from "react";

const { Component } = React;
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

class Artists extends Component {
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
      <div>
        {artists.map((artist) => {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </div>
    );
  }
}

// const Artists = async () => {
//   return (
//     <div>
//       {artists.map((artist) => {
//         return <li key={artist.id}>{artist.name}</li>;
//       })}
//     </div>
//   );
// };

export default withRouter(Artists);
