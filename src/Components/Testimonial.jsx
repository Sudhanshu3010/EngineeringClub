import React from "react";
import HeadText from "./HeadText";
import "../App.css";
import avatar1 from "../Images/Avatar1.png"
import avatar2 from "../Images/Avatar2.png"

const Testimonial = () => {
  return (
    <section id="activities" className="">
      <div className="container-fluid test-bg">
        <div className="row">
          <div className="col-12 mt-2 mb-4"> </div>
        </div>
       
    

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="testimonial-carousel">
                <div className="mobile-hide">
                  <HeadText
                    heading="Don’t just take our words"
                    discription="Listen directly from thousands of happy EnggClub customers"
                  ></HeadText>
                </div>

                <div className="row justify-content-center mt-4">
                  <div className="col-lg-9 col-sm-12 test-heading fw-bolder px-2">
                    <h1>EnggClub has saved me from looking for best activities and transformed the way how I look for after work life!</h1>
                  </div>
                </div>
                <div className="row justify-content-center mt-4 ">
                  <div className="col-lg-10 avt">
                    <img src={avatar1} alt={avatar1} className="avt"></img>
                    <h4>Koray Okumus</h4>
                    <p>Business Lead, Brownie Coffee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="testimonial-carousel">
                <div className="mobile-hide">
                  <HeadText
                    heading="Don’t just take our words"
                    discription="Listen directly from thousands of happy EnggClub customers"
                  ></HeadText>
                </div>

                <div className="row justify-content-center mt-4">
                  <div className="col-lg-9 col-sm-12 test-heading fw-bolder px-2">
                    <h1>EnggClub has saved me from looking for best activities and transformed the way how I look for after work life!</h1>
                  </div>
                </div>
                <div className="row justify-content-center mt-4 ">
                  <div className="col-lg-10 avt">
                    <img src={avatar2} alt={avatar2} className="avt"></img>
                    <h4>Koray Okumus</h4>
                    <p>Business Lead, Brownie Coffee</p>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>






        <div className="row mt-5 mb-5"></div>
      </div>
    </section>
  );
};

export default Testimonial;
