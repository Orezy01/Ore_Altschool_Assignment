import axios from "axios";
import React, { useState } from "react";
import EndResults from "./EndResults";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [repository, setRepository] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = async () => {
    // console.log(search);
    try {
      const res = await axios(`https://api.github.com/users/${search}/repos`);
      setRepository(res);
      // setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Search For A Repository On Github From Here:</h1>

        <input
          type="search"
          placeholder="search..."
          className="form-control mr-sm-2 "
          value={search}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="btn btn-outline-success my-2 my-sm-0"
        >
          <i className="fa-sharp fa-solid fa-magnifying-glass">Search</i>
        </button>
      </div>

      <EndResults repos={repository} />
    </>
  );
};

{
  /* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */
}
export default SearchBar;
