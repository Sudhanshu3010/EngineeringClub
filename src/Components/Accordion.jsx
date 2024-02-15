import React from "react";
import "../App.css"

const Accordion = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-sm-10 mx-auto">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is EnggClub?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">EnggClub is an online platform to help you look and book for activities that interest you. We are one stop solution to provide you the best experience to book activites.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                     Can EnggClub book activities on behalf of me?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">EnggClub is an online platform to help you look and book for activities that interest you. We are one stop solution to provide you the best experience to book activites.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Do EnggClub has a subscripton or I have to pay individually for each booking?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">EnggClub is an online platform to help you look and book for activities that interest you. We are one stop solution to provide you the best experience to book activites.</div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Accordion;
