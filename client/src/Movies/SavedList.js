import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  goHome = () => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            activeClassName="saved-active"
            key={movie.title}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className="home-button" onClick={this.goHome}>
          Home
        </div>
      </div>
    );
  }
}
