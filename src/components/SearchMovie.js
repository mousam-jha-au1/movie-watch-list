import React, { useState } from "react";

function SearchMovie({ getMovieList }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSearch() {
    getMovieList(userInput);
    setUserInput("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie ..."
        onChange={(e) => handleChange(e)}
        value={userInput}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchMovie;
