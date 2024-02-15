import React from "react";
import "../App.css";
import HeadText from "./HeadText";
import strike from "../Images/Featured_Icons/Featured icon2.png"
import NumCard from "./NumCard";

const NumberSection = () => {
  return (
    <>
      <div className="container ">
        <div className="row mt-5 mb-5">
        </div>
        <div className="row justify-content-center">
            <img className="num-img p-0" src={strike} alt={strike} ></img>
            <HeadText heading="Numbers speak for themselves">
            </HeadText>
        </div>
        <div className="row mt-4">
            <div className="col-7 mx-auto">
               <div className="row">
                <NumCard
                    num="3K"
                    disc="Tutors and activities"
                ></NumCard>
                <NumCard
                    num="3X"
                    disc="outdoor activity time"
                ></NumCard>
                <NumCard
                    num="40K"
                    disc="Bookings per month"
                    className="no=border-right"
                    isLast={true}
                ></NumCard>
               </div>
            </div>
        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-lg-11 get-started">
                <h2>Get started with EnggClub<span className="banner-p"> <br></br><p>Join over 40,000+ individuals already booking with EnggClub</p></span></h2>
                
                <button>
                    Learn more
                </button>
                <button className="bg-bluebtn">
                    Get Started
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default NumberSection;
