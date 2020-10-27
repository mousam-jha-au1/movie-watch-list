import React from "react";
import WatchCard from "./WatchCard";

function WatchList({ watchList }) {
  return (
    <div>
      {watchList.length
        ? watchList.map((movie) => <WatchCard movie={movie} key={movie.id} />)
        : null}
    </div>
  );
}

export default WatchList;
