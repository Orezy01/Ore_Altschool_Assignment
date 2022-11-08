import React from 'react';
import { Button } from './Button';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className="footer-main">
        <p className="footer-main-heading">
            Join The Team to receive our Newsletter
        </p>
        <p className="footer-main-text">
            You can Unsubscribe at anytime.
        </p>
        <div className="input-areas">
            <form>
                <input type="email"  name='email' placeholder='Enter Your Email...' className='footer-input'/>
                <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
