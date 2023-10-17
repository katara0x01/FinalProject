import React from 'react';
import '../App.css';

import driver from '../assets/StoriesAvatars/driver.png'
import farmer from '../assets/StoriesAvatars/farmer-avatar.png'
import female from '../assets/StoriesAvatars/female-chef.png'
import flight from '../assets/StoriesAvatars/flight-attendant.png'
import graduate from '../assets/StoriesAvatars/graduated-student.png'
import saleswoman from '../assets/StoriesAvatars/saleswoman.png'


const profileImages = [
  {
    image:driver,
    name: 'Ahmad', 
  },
  {
    image: flight,
    name: 'Nada',
  },
  {
    image: graduate,
    name: 'Lama',
  },
  {
    image: female,
    name: 'Saja',
  },
  {
    image: graduate,
    name: 'Mayar',
  },
  {
    image: saleswoman,
    name: 'Mela',
  },
  
  {
    image: driver,
    name: 'Samer',
  },

];

function Story() {
  return (
    <div className="stories">
      {profileImages.map((profile, key) => (
        <div key={key} className="item">
          <img style={{width:"60px", height:"60px", padding:"5px", margin:".5px"}} src={profile.image} alt={`User ${key + 1}`} />
          <p className="name">{profile.name}</p>
        </div>        
      ))}
    </div>




  );
}

export default Story;