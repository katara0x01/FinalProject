import "./App.css";
import Profile from "./Component/Profile";
import Messages from "./Component/Messages";
import { Routes, Route } from "react-router-dom";
import Posts from "./timeline/Timeline";
import Navbar from "./navigation/Sidenav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Explore from "./Component/Explore";
import CreateModal from "./Component/CreateModal";
import Signup from "./Component/Signup";
// import Login from "./Component/Login";
import axios from "axios";
import Login from "./Component/Login";
import Homepage from "./Homepage";
function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/modal" element={<CreateModal />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
