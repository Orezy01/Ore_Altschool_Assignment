import React from "react";

import "../../App.css";
import MainSection from "../MainSection";
import {Helmet} from 'react-helmet-async';


export default function Home() {
  return (
    <>
      <Helmet>
      <title>Home </title>
      <meta name="description" content="Homepage"/>
      <link rel="canonical" href="/Home" />
      </Helmet>
      <MainSection/> 
    </>
  );
}
