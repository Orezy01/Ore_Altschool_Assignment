import React, { useEffect, useState } from "react";
import { Link,Routes,Route } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton()
  },[]);

  window.addEventListener('resize', showButton);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
    
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NAVBAR <i className="fa-solid fa-splotch"></i>
          </Link>
          {/* <i class="fa-brands fa-instagram"></i> */}

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Repository"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Repository
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Repositories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Repositories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Sign-Up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>

      {/* <Routes>
      
      </Routes> */}
    </>
  );
};

export default Navbar;
