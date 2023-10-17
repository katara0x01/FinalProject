import React, { useState } from "react";
import "./Signup.css";
import instagram from "../assets/instagram-logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");

  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      userName,
    };

    axios
      .post("http://16.170.173.197/users/signup", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signup">
      <img src={instagram} alt="" />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={userName}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
