import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div key={director.name}>
            <h2>Name: {director.name}</h2>
            <ul>Movies: 
              <li>{director.movies[0]}</li>
              <li>{director.movies[1]}</li>
              <li>{director.movies[2]}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Directors;
