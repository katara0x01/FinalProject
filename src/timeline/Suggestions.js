import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import b from '../assets/Avatars/steward.png'
import n from '../assets/Avatars/singer.png'
import m from '../assets/Avatars/man.png'
import k from '../assets/Avatars/singer.png'
import l from '../assets/Avatars/nurse.png'
function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src={l}/>
            </span>
            <div className="username__info">
              <span className="username">nadahaj</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src={b}/>
            </span>
            <div className="username__info">
              <span className="username">iibraheems</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src={m}/>
            </span>
            <div className="username__info">
              <span className="username">mman9our</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src={k}/>
            </span>
            <div className="username__info">
              <span className="username">katara0x01</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
