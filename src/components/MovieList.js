import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movieList, setWatchList }) {
  function handleSelectMovie(id) {
    let selectedMovie = movieList.filter((movie) => movie.id === id);
    setWatchList((prevState) => [...prevState, ...selectedMovie]);
  }

  return (
    <div>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleSelectMovie={handleSelectMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;
