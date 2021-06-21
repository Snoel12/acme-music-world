import React from "react";
const Nav = (data) => {
  const { artists } = this.props.data;
  const { albums } = this.props.data;

  return (
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
  );
};
export default Nav;
