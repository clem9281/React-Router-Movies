import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active">
            <span className="saved-movie" key={movie.title}>
              {movie.title}
            </span>
          </NavLink>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
