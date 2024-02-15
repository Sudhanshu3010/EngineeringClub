import React from 'react';
import {WhyUsCard} from './Card';
import Sdata from '../Data/ActData';
import HeadText from './HeadText';
import '../App.css';


const ActivitiesSection = () => {
    return (
        <section id="activities" className="">
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-12 mt-3 mb-4"> </div>
                </div>
                <HeadText
                heading="Why us?"
                discription="Powerful, self-serve product and quality tutors to help you easily manage and engage your activities"
                ></HeadText>
                <div className="row mt-5">
                    <div className="col-10  mx-auto">
                        <div className="row">
                            {
                                Sdata.map((val,ind)=>{
                                    return <WhyUsCard key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    disc={val.disc}
                                    ></WhyUsCard>
                                })
                            }
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default ActivitiesSection;
