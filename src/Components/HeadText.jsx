import React from 'react';
import '../App.css'; 

const HeadText=(props) =>{
  return (
    
     <>
     <div className="row px-3 justify-content-center">
                    <div className="col-lg-10 col-sm-12 main-activity">

                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-sm-12 text-center  p-0">
                                <h1 className="mt-3 ">
                                    {props.heading}
                                </h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-sm-12 text-center">
                                <p className="mt-3">
                                    {props.discription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
     </>
    
  );
};

export default HeadText;
