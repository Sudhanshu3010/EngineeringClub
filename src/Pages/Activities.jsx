import React from "react";
import "../App.css";
import ActCards from "../Components/ActCards";
import ActHeader from "../Components/ActHeader";

import Footer from "../Components/Footer";

const ActivitiesPage = () => {
    return (
        <>
            <ActHeader></ActHeader>
            <ActCards></ActCards>


            <div className="container">

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
            <Footer></Footer>
        </>

    );
};

export default ActivitiesPage;
