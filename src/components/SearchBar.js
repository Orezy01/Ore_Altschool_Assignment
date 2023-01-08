import axios from "axios";
import React, { useState } from "react";
import EndResults from "./EndResults";
import './SearchBar.css';

const SearchBar = () => {
  
  const [search, setSearch] = useState("");
  const [repository, setRepository] = useState([]);
   const [loading, setLoading] = useState(false); 
 
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = async () => {
    // console.log(search);
    try {
      const res = await axios(`https://api.github.com/users/${search}/repos`);
      setRepository(res);
      setLoading(true);
      // setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Search  Github A Repository </h2>

        <input
          type="search"
          placeholder="search..."
          className="mySearch"
          value={search}
          onChange={handleChange}
          style={{  marginTop: "22px" }}
        />
        <button
          onClick={handleClick}
          className="mybtn "
        >
          <i className="fa-sharp fa-solid fa-magnifying-glass">Search</i>
        </button>
      </div>
      {console.log(loading)}
{loading ? <EndResults repos={repository} /> : <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      
    </>
  );
};

export default SearchBar;
