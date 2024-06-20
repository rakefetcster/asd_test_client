import React from 'react';
import anxious from '../data/anxious.jpg' // Tell webpack this JS file uses this image

const AnxiousImage=()=> {
  // Import result is the URL of your image
  return <img src={anxious} alt="Anxious" />;
}

export default AnxiousImage;