import React from 'react';
import angry from '../data/angry.jpg' // Tell webpack this JS file uses this image

const AngeryImage=()=> {
  // Import result is the URL of your image
  return <img src={angry} alt="Angry" />;
}

export default AngeryImage;