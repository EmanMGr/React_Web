import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";




function Sidebar() {
    return (
      <div className="sidebar-navigation hidde-sm hidden-xs">
        <div className="logo">
          <a href="#!">E- <em>Guard</em></a>
        </div>
        <nav>
          <ul>
            <li><a href="#top"><span className="rect"></span><span className="circle"></span>Home</a></li>
            <li><a href="#featured"><span className="rect"></span><span className="circle"></span>Featured</a></li>
            <li><a href="#projects"><span className="rect"></span><span className="circle"></span>Recent Work</a></li>
            <li><a href="#map"><span className="rect"></span><span className="circle"></span>Map</a></li>
            <li><a href="#contact"><span className="rect"></span><span className="circle"></span>Contact Us</a></li>
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
    );
  }

export default Sidebar;  