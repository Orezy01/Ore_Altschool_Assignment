import React from 'react';
import "../App.css";
import { Button } from './Button';
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className='main-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>A New Adventure Awaits</h1>
      <p>What Are You Waiting For?</p>
      <div className="main-btn">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Click To Get Started</Button>
        {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Trailer <i className="fa-regular fa-circle-play"/></Button> */}
      </div>
    </div>
  )
}

export default MainSection;
