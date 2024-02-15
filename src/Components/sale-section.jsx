import React from 'react';
import box from '../Images/Featured_Icons/BoxFrame.png'
import '../App.css';

const Sale = () => {
    return (

        <>

            <div className="gradient-div ">
                
                <div className="d-flex">
                    <img src={box} alt={box} />
                    <div className="d-block mt-2 ms-3">
                        <h3>Sale is on!</h3>
                        <p>Book your next activity for 10% off.</p>

                    </div>
                </div>
            </div>
            <ul>
                <li>30-day money-back guarantee</li>
                <li>Access to mentor for 30 days even after activity is completed</li>
                <li>Learn from hand-vetted instructors, experts in their field</li>
            </ul>

        </>


    );
};

export default Sale;
