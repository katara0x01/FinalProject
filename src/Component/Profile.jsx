import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import N from '../Pics/N.jpg'


export default function ImageAvatars() {
  const [value, setValue] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    margin: '0 auto',
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div style={containerStyle}>
      <Box style={{ backgroundColor: 'black' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt="My Photo" src={N} sx={{ width: 100, height: 100 }} />
          <span style={{ color: 'white', fontSize: '24px' }}>naarjis</span>
          <Button style={{ backgroundColor: 'white', color: 'black', fontSize: '12px', padding: '4px 12px' }} variant="contained">
            Edit Profile
          </Button>
          <Button style={{ backgroundColor: 'white', color: 'black', fontSize: '12px', padding: '4px 12px' }} variant="contained">
            View Actions
          </Button>
          <SettingsIcon style={{ color: 'white', fontSize: '24px' }} />
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center" marginLeft="140px" marginTop="-20px">
          <span style={{ color: 'white', fontSize: '18px' }}>4 Posts</span>
          <span style={{ color: 'white', fontSize: '18px' }}>259 Followers</span>
          <span style={{ color: 'white', fontSize: '18px' }}>700 Following</span>
        </Stack>
        <br></br>

        <span style={{ color: 'white', fontSize: '18px' }}>{"Give me Strength to go on."}</span>
        <Tabs style={{ color: '#1D1D1D' }} value={value} onChange={handleChange} aria-label="icon position tabs example">
          <Tab style={{ color: 'white' }} icon={<AppsIcon />} iconPosition="start" label="POSTS" />
          <Tab style={{ color: 'white' }} icon={<BookmarkBorderIcon />} iconPosition="start" label="REELS" />
          <Tab style={{ color: 'white' }} icon={<AssignmentIndIcon />} iconPosition="start" label="TAGGED" />
        </Tabs>
        <ImageList sx={{ width: 450, height: 390 }} cols={3} rowHeight={165}>

        </ImageList>

      </Box>
    </div>
  );
}

