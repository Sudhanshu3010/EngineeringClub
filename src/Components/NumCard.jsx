import React from 'react';
import '../App.css'; 

const NumCard=(props) =>{
    const cardStyle = {
        borderRight: props.isLast ? 'none' : '1px solid #eaecf0', 
      };
  return (
    <>
    <div className="col-lg-4 col-sm-10 d-flex num-card" style={cardStyle}>
        <h1>{props.num}</h1>
        <p>{props.disc}</p>
    </div>
    </>
    
  );
};

export default NumCard;
