import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRss, FaBehance } from "react-icons/fa";
// import "./src/App.css"; 
import '../../src/App.css';

function Navbar() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const delta = 5;

      if (Math.abs(lastScrollTop - st) > delta) {
        if (st > lastScrollTop) {
          setScrollingUp(false); // Scroll Down
        } else {
          setScrollingUp(true); // Scroll Up
        }
        setLastScrollTop(st);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

 

  return (
    <header className={`responsive-nav ${scrollingUp ? "nav-down" : "nav-up"}`}>
      <div className="sidebar-navigation">
        <div className="logo">
          <a href="#!">E- <em>Guard</em></a>
        </div>

        <nav className={`navbar-menu ${isCollapsed ? "collapsed" : "expanded"}`}>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#projects">Recent Work</a></li>
            <li><a href="#map">Map</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <ul className="social-icons">
          <li><a href="#!"><FaFacebookF /></a></li>
          <li><a href="#!"><FaTwitter /></a></li>
          <li><a href="#!"><FaLinkedinIn /></a></li>
          <li><a href="#!"><FaRss /></a></li>
          <li><a href="#!"><FaBehance /></a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
