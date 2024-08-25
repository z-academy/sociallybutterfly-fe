import React from "react";

// Importing the landing page sections
import LpHeader from "./components/landingpage/header/Header";
import Banner from "./components/landingpage/banner/Banner";
import DemoSlider from "./components/landingpage/demo-slider/DemoSlider";
import Testimonial from "./components/landingpage/testimonial/Testimonial";
import C2a2 from "./components/landingpage/c2a/C2a2";
import Footer from "./components/landingpage/footer/Footer";

const Landingpage = () => {
  return (
    <div >
      <LpHeader />
      <main>
        <Banner />
        <DemoSlider />
        <Testimonial />
        <C2a2 />
      </main>
      <Footer />
    </div>
  );
};

export default Landingpage;
