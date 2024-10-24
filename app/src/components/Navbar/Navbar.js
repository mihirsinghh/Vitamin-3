import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
     <nav class = "navbar">

        <div class = "header">
            My website
        </div>
        <div class = "links">
            <Link to = "/home"> Home </Link>
            <Link to = "/nothome"> Not Home </Link>
        </div>

     </nav>
     // add Home and NotHome, including links (after routing established)
)};
  
  // Always export your components so they can be imported in other files
  export default Navbar;
