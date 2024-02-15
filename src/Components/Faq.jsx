import React from 'react';
import '../App.css'; 
import HeadText from './HeadText';
import Accordion from './Accordion';

const Faq=() =>{
  return (<>
        <div className="faq-section">
        
        <HeadText
                heading="EnggClub Frequently asked questions"
                discription="Everything you need to know about the product"
        ></HeadText>
        <div className="pt-4"></div>
        <Accordion>
        </Accordion>
        </div>
    </>
    
  );
};

export default Faq;
