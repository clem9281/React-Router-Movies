import React, { Component } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.includes(movie)) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        {/* Made this a route to have access to props.history on the saved list component, with '/' as the path and not exact it should show up on all views */}
        <Route
          path="/"
          render={props => <SavedList {...props} list={this.state.savedList} />}
        />
        <Route path="/" exact component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
