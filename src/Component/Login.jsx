
import React, { useState } from "react";
import "./Login.css";
import instagram from '../assets/instagram-logo.png'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = {
    email,
    password,
  };
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://16.170.173.197/users/login", { email, password }) 
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const userId = response.data.user.id;
        localStorage.setItem("userId", userId);
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = "An error occurred while logging in. (Check your email and password)";
        window.alert(errorMessage);
      });
  };
  return (
    <div className="login">
      <img
        src={instagram}
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
