import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div key={actor.name}>
            <h2>Name: {actor.name}</h2>
            <ul>Movies: 
              <li>{actor.movies[0]}</li>
              <li>{actor.movies[1]}</li>
              <li>{actor.movies[2]}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors;
