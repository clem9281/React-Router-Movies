import React, { Component } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  routeToMovie = (props, movie) => {
    props.history.push(`/movies/${movie.id}`);
  };
  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails
            movie={movie}
            key={movie.id}
            routeTo={() => this.routeToMovie(this.props, movie)}
          />
        ))}
      </div>
    );
  }
}

function MovieDetails(props) {
  return (
    <div className="movie-card" onClick={props.routeTo}>
      <MovieCard movie={props.movie} />
    </div>
  );
}
