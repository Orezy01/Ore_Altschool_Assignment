import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import MainSection from "../MainSection";

export default function Home() {
  return (
    <div>
      {/* <h1>Homepage</h1> */}
      {/* <Link to="#about">Click to go to about page from here</Link> */}
      {/* <p>The rest is history, we have entered world class</p> */}
      <MainSection/>
    </div>
  );
}
