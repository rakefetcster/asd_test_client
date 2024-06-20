import React from 'react';
import surprised from '../data/surprised.jpg' // Tell webpack this JS 

const SurprisedImage=()=> {
  // Import result is the URL of your image
  return <img src={surprised} alt="Surprised" />;
}

export default SurprisedImage;