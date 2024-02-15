import React from "react";
import "./App.css";
import Activities from "./Components/ActivitiesSection"
import Testimonial from "./Components/Testimonial"
import HomeHead from "./Components/HomeHeader";
import Faq from "./Components/Faq"
import NumberSection from "./Components/Numbers";
import Footer from "./Components/Footer";

const Home = () => {
    return (
        <>
            <HomeHead></HomeHead>
            <Activities></Activities>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <NumberSection></NumberSection>
            <Footer></Footer>
        </>

    );
};

export default Home;
