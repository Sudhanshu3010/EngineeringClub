import React from "react";
import Star from "./star";
import gimg from "../Images/Ellipse 5.png"
import "../App.css";

const HomeHead= () => {
    return(
        <section id="header" className="">
        <div className="container-fluid nav_bg ">
            
            <div className="row px-3 justify-content-center">
                <div className="col-lg-10 col-sm-12">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-12 text-center main-h p-0">
                            <h1 className="mt-3 txtr-1">
                                Now Book best activities nearby you
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-12 main-p text-center p-0">
                            <p className="mt-3 txtr ">
                                One-stop solution to keep yourself busy through fully
                                fledged activites, craft learning opportunities and much
                                more!
                            </p>
                        </div>
                    </div>
                   
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-sm-10 bg-none py-2 searchbox">
                            <form className="exp-form" action="/activities">
                                <input
                                    className="form-control me-2 inp-1"
                                    type="search"
                                    placeholder="Search activities"
                                    aria-label="search"
                                />
                                <input
                                    className="form-control me-2 inp-2"
                                    type="search"
                                    placeholder="Location"
                                    aria-label="location"
                                />
                                <button className="btn btn-outline-dark exp-3" type="submit" >
                                    EXPLORE NOW
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 rating-1 mx-auto mb-5">
                            <Star rating={5}/>
                            <h2 className="mt-2">Best activities booking product ever</h2>
                            <p className="mt-2 mb-1">Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.</p>
                            <div className="d-flex">
                            <img src={gimg} className="me-2" alt={gimg}></img>
                            <h5 className="">Denny Jones</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}
export default HomeHead;