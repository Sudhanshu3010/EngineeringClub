import React from 'react';
import '../App.css';
import Sale from '../Components/sale-section';
import cardimg1 from '../Images/actimg3.png'
import Footer from '../Components/Footer';
import {NavLink} from 'react-router-dom'

import map from '../Images/Featured_Icons/map-pin.png'

const MyBookings = () => {
    return (
        <>
            <div className="container bookings">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row  mt-4 justify-content-center">
                            <div className="col-lg-12 my-4">
                                <div className="heading-col d-flex ">
                                    <h1 className='fw-bold'>My Bookings</h1>

                                    <NavLink to="/activities">
                                    <button className='bg-bluebtn'>Book new Activity</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 booking-card">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-12 bookcard-img">
                                            <img src={cardimg1} alt={cardimg1}></img>
                                        </div>
                                        <div className="col-lg-8 booking-text">
                                            <div className="card-body">
                                                <h5 className="card-title mb-2">Learn Figma - UI/UX Design Essential Training</h5>
                                                <p className="card-text"><img src={map} alt={map}></img> Camp Elite, London SE 18</p>
                                                <p className="description">
                                                    Learn how to Acoustic Guitar and Electric Guitar to keep your music vibes going
                                                </p>
                                                <p >Next schedule  &nbsp;<span className='fw-bold text-dark'>12/08/2023 &nbsp;12:30PM</span></p>
                                                <div className="act-btn2 d-flex">
                                                    <button className="" type="submit">
                                                        Reschedule Meeting
                                                    </button>
                                                    <button className="" type="submit">
                                                        Leave a review
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 booking-card mt-4">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-12 bookcard-img">
                                            <img src={cardimg1} alt={cardimg1}></img>
                                        </div>
                                        <div className="col-lg-8 booking-text">
                                            <div className="card-body">
                                                <h5 className="card-title mb-2">Learn Figma - UI/UX Design Essential Training</h5>
                                                <p className="card-text"><img src={map} alt={map}></img> Camp Elite, London SE 18</p>
                                                <p className="">
                                                    Learn how to Acoustic Guitar and Electric Guitar to keep your music vibes going
                                                </p>
                                                <p>Next schedule  &nbsp;<span className='fw-bold text-dark'>12/08/2023  12:30PM</span></p>
                                                <div className="act-btn2 d-flex">
                                                    <button className="" type="submit">
                                                        Reschedule Meeting
                                                    </button>
                                                    <button className="" type="submit">
                                                        Leave a review
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-9 mt-4">
                        <div className=" sale-section">
                            <Sale></Sale>
                        </div>

                    </div>
                </div>






            </div>
            <Footer></Footer>

        </>


    );
};

export default MyBookings;
