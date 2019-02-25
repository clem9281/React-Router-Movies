import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    console.log("clicked");
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
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card" onClick={props.routeTo}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}
