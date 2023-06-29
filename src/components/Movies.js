import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            <h2>Name: {movie.title}</h2>
            <h3>Time: {movie.time}</h3>
            <h3>Genres: 
              <li>{movie.genres[0]}</li>
              <li>{movie.genres[1]}</li>
              <li>{movie.genres[2]}</li>
              <li>{movie.genres[3]}</li>
              <li>{movie.genres[4]}</li>
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;
