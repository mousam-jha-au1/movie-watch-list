import React from "react";

function WatchCard({ movie }) {
  const { title, poster_path: poster } = movie;
  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster}
        alt={title}
        width="100px"
      />
      <p>{title}</p>
    </div>
  );
}

export default WatchCard;
