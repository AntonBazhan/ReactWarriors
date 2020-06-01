import React from 'react'
import { moviesData } from '../moviesData'
import MovieItem from './MovieItem'

   // UI = fn(state, props)
   
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = (movie) => {
    const undateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id
    })

    this.setState({
      movies: undateMovies,
    });
  };

  addMovieTowillWatch = movie =>{
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
  });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
            {this.state.movies.map((movie) => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                  <MovieItem 
                  movie={movie} 
                  removeMovie={this.removeMovie}
                  addMovieTowillWatch={this.addMovieTowillWatch} />
                </div>
              )
            })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch:{this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
