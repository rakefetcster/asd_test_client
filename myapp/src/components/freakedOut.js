import React from 'react';
import freakedOut from '../data/freakedOut.jpg' // Tell webpack this JS file uses this image

const FreakedOutImage=()=> {
  // Import result is the URL of your image
  return <img src={freakedOut} alt="FreakedOut" />;
}

export default FreakedOutImage;