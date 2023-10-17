import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import N from '../Pics/N.jpg'
function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <Link to="/posts">
         
          <button className="sidenav__button">
            <HomeIcon />
            <span>Home</span>
          </button>
        </Link>

        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <Link to="/explore">
          <button className="sidenav__button">
            <ExploreIcon />
            <span>Explore</span>
          </button>
        </Link>

        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <Link to="/messages">
          <button className="sidenav__button">
            <ChatIcon />
            <span>Messages</span>
          </button>
        </Link>
        <button className="sidenav__button">
          <FavoriteBorderIcon />

          <span>Notification</span>
        </button>
        <Link to="/modal">
          <button className="sidenav__button">
            <AddCircleOutlineIcon />

            <span>Create</span>
          </button>
        </Link>
        <Link to="/profile">
          <button className="sidenav__button">
            <Avatar src={N}/>
            <span>Narjis Ibrahim</span>
          </button>
        </Link>
      </div>
      <div className="sidenav__m">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText"> More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
