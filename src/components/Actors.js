import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actors.map(actor=>{
        return (<div>
        Name: {actor.name};
        Movies:
        {actor.movies.map(movie => <ul>{movie}</ul>)}
      </div>)
      })
    }
  </div>)

}

export default Actors;
