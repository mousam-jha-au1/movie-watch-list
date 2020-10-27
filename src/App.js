import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import WatchList from "./components/WatchList";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);

  // get movie list
  async function getMovieList(userInput) {
    let searchTerm = userInput.split(" ").join("%20");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6d9c718191b2963f3475f8e8dee730ea&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    const movieData = await fetch(url);
    const movies = await movieData.json();
    await setMovieList(movies.results);
  }
  console.log(movieList);
  console.log(watchList);
  return (
    <div className="App">
      <Header />
      <div className="movie-section">
        <div className="movie-search-section">
          <SearchMovie getMovieList={getMovieList} />
          <MovieList movieList={movieList} setWatchList={setWatchList} />
        </div>
        <div className="movie-watch-list-section">
          <WatchList watchList={watchList} />
        </div>
      </div>
    </div>
  );
}

export default App;
