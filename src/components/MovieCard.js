import React from "react";

function MovieCard({ movie, handleSelectMovie }) {
  const {
    id,
    title,
    overview,
    poster_path: poster,
    vote_average: vote,
  } = movie;
  const cardStyle = {
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    maxWidth: "600px",
  };
  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{overview}</p>
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster}
        alt={title}
        width="200px"
      />
      <p>Vote {vote}</p>
      <button onClick={() => handleSelectMovie(id)}>Add to watch list</button>
    </div>
  );
}

export default MovieCard;
