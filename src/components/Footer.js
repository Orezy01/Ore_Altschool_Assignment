import React from 'react';
// import { Button } from './Button';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
      <h3>My Footer Design</h3>
      <p></p>
      <ul className="socials">
        <li><a href="https://twitter.com/Rexxie77" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/ore-joshua-65b10b234/"  target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://web.facebook.com/profile.php?id=100022263165479" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
      </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; 2023. designed by <span>Rexxie</span></p>
      </div>
    </footer>
  )
}

export default Footer
