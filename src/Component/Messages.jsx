// import { Avatar } from "@mui/material";
// import React from "react";
//  import messengar from '../assets/messengar-logo.png'
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';


// export default function Messages() {
//     return (
//       <div style={{backgroundColor:"black"}}>
//       <Grid container spacing={2}>
//   <Grid item xs={2.5}>

//       </Grid>
//       <Grid item xs={5}>
//       <Avatar alt="Remy Sharp"  src={messengar} sx={{width:60, height:60}}/>
//         <h2 style={{ color:"white"}}>Your Messages</h2>
//         <h3 style={{color:"#1D1D1D"}}> Send private photos and messages to a friend or group</h3>
//         <Button variant="contained" disableElevation>
//       SEND MESSAGE
//     </Button>
//           <br/>
//           <br/>
//           <br/>
//       </Grid>
//       <Grid item xs={4}></Grid>
//       </Grid>
//   </div>
//     )}






import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Button from '@mui/material/Button';
import m from '../assets/messengar-logo.png'
import l from '../assets/Avatars/nurse.png'

function Messages() {
  return (
    <Box >
      <Grid container spacing={1} xs >
        <Grid item xs={3} style={{ backgroundColor: "black" }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                <ListItem >
                  <Typography style={{ color: "white", textAlign: "left" }}>Narjis Ibrahem <KeyboardArrowDownIcon />
                  </Typography>
                </ListItem>
              </Typography>
            </Grid>
            <Grid item>

              <Typography style={{ color: "white", textAlign: "right" }}><EditNoteIcon />

              </Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom component="div">
                <ListItem >
                  <Typography style={{ color: "white", textAlign: "left" }}>masseges
                  </Typography>
                </ListItem>
              </Typography>
            </Grid>
            <Grid item>

              <Typography style={{ color: "white", textAlign: "right" }}>Request

              </Typography>
            </Grid>
          </Grid>
          <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'black', color: "white" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={l} />
              </ListItemAvatar>
              <ListItemText
                primary="Hanin"

                secondary="followed by Nour"
                sm={{ color: "white" }}
              />
              .1s

            </ListItem>

            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={l} />
              </ListItemAvatar>
              <ListItemText
                primary="Nour"
                secondary="N"
              />
              .11s
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={l} />
              </ListItemAvatar>
              <ListItemText
                primary="Dalia"
                secondary="D" />
              .1d


            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={l} />
              </ListItemAvatar>
              <ListItemText
                primary="Nour"
                secondary="N"
              />
              .11s
            </ListItem>
          </List>



        </Grid>



        <Grid item xs={7} style={{ backgroundColor: "black", padding: "150px", width: "1500px" }}>
          <br />
          <br />
          <br /><br />
          <img src={m} alt='hello' />
          <Typography style={{ color: "white" }}>Your Masseges</Typography>
          <br />
          <Typography style={{ color: "#1D1D1D" }}>Send private photo and massege to a freiend or group</Typography>
          <br />
          <Button variant="contained">Contained</Button>

        </Grid>
      </Grid>

    </Box>
  );
}

export default Messages