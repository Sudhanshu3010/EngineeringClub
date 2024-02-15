import React from "react";
import "../App.css";

const ActHeader= () => {
    return(
        <section id="header" className="">
        <div className="container-fluid nav_bg2 ">
            
            <div className="row px-3 justify-content-center">
                <div className="col-lg-10 col-sm-12">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-12 text-center main-h p-0">
                            <h1 className="mt-3 txtr-1 txtr-2">
                               Activities nearby you
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-12 main-p text-center p-0">
                            <p className="mt-3 txtr text-black">
                             Search for nearby outdoor and indoor activites
                            </p>
                        </div>
                    </div>
                   
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-sm-10 bg-none py-2 searchbox">
                            <form className="exp-form">
                                <input
                                    className="form-control me-2 inp-1"
                                    type="search"
                                    placeholder= "Search activities"
                                    aria-label="search"
                                />
                                <input
                                    className="form-control me-2 inp-2"
                                    type="search"
                                    placeholder="Location"
                                    aria-label="location"
                                />
                                <button className="btn btn-outline-dark exp-3" type="submit">
                                    EXPLORE NOW
                                </button>
                            </form>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
    </section>
    
    );
}
export default ActHeader;