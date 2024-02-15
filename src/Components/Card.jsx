import React from 'react';
import map from '../Images/Featured_Icons/map-pin.png'
import trophy from '../Images/Featured_Icons/trophy.png'
import contact from '../Images/Featured_Icons/contact.png'
import book from '../Images/Featured_Icons/book.png'
import score from '../Images/Featured_Icons/Score.png'
import { MdArrowForwardIos } from "react-icons/md";
import '../App.css';
import { NavLink } from 'react-router-dom';

export const WhyUsCard = (props) => {
    return (
        <div className="col-md-4 col-12 mx-auto p-1 mb-5">
            <div className="card text-center mx-2" >
                <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.disc}</p>
                </div>
            </div>
        </div>
    );
};
export const ActivityCard = (props) => {
    return (
        <div className="col">
            <div className="card act-card">
                <img src={props.imgsrc} className="card-img-top act-img" alt={props.imgsrc} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><img src={map} alt={map}></img>{props.loc}</p>
                    <p className="card-text">
                        <img src={book} alt={book}></img> Sessions : {props.session}
                        <img src={contact} alt={contact}></img> Availability : {props.availability}
                        <img src={trophy} alt={trophy}></img> {props.course}
                    </p>
                    <div className="act-btn d-flex">
                        <NavLink to='/'>
                        <button className="" type="submit">
                            Book Activity <MdArrowForwardIos />
                        </button></NavLink>
                        <NavLink to='/product'>
                        <button className="bg-white text-black" type="submit">
                            More details
                        </button></NavLink>
                        <img src={score} alt={score}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const ProductCard = (props) => {
    return (
        <>
            <div className="productCard">
                <p className="card-text"><img src={map} alt={map}></img>  Camp Elite, London SE 18</p>
                <p className="card-text">
                    <img src={book} alt={book}></img> Sessions : 5
                   &nbsp; <img src={contact} alt={contact}></img> Availability : 6/11
                   &nbsp; <img src={trophy} alt={trophy}></img> Begineer
                </p>
                <h4 className='fw-bold'>$32/session</h4>

                <button className='w-100 bg-bluebtn mb-2'>Book Activity</button>
                <button className='w-100 bg-wbbtn mb-2'>Free Demo Class</button>

            </div>

        </>
    )


}



