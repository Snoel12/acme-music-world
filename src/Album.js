import { withRouter } from "react-router-dom";
import React from "react";
const { Component } = React;
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

class Albums extends Component {
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
        {albums.map((album) => {
          return (
            <ul>
              <li>{album.name}</li>
              <li>{album.artist.name}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

// const Albums = ({ albums }) => {
//   return (
//     <div>
//       {albums.map((album) => {
//         return (
//           <ul>
//             <li>{album.name}</li>
//             <li>{album.artist.name}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

export default withRouter(Albums);
