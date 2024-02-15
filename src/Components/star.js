import React from "react";
import {FaStar} from "react-icons/fa";


const StarRating = ({ rating }) => {
    // Create an array of stars based on the 'rating' prop
    const stars = Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} color="#FDB241" size={17} />
    ));
  
    return <div>{stars}</div>;
  };

export default StarRating;
