import React from 'react';
import '../App.css';
import logo from '../Images/logo 1.png'

const Footer = () => {
    return (

        <div className="container footer-div">
            <div className="row">
                <div className="col-lg-7 foot-img">
                    <img src={logo} alt={logo}/>
                    <ul className='footer-list'>
                        <li>Overview</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Careers</li>
                        <li>Help</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="col-lg-4 newsletter ">
                        <p>Stay up to date</p>
                        <div className="row g-2">     
                            <div className="col-lg-8">
                                <input type='email' className='' placeholder='Enter your Email'></input>
                            </div>
                            <div className="col-lg-4 ">
                            <button type='submit' className='bg-bluebtn'>Subscribe</button>
                            </div>
                            
                        </div>
                    </div>
            </div>
            <div className="row">
                <div className="col-lg-11 col-sm-2 g-line mx-auto">
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-11 mx-auto px-0 copyright-text">
                    <p>© 2023 EnggClub. All rights reserved.</p>
                    <div className="tc d-flex">
                        <a href="/" >
                            Terms
                        </a>
                        <a href="/" >
                            Privacy
                        </a>
                        <a href="/about" >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Footer;
