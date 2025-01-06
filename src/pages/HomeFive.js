import React from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import AboutAreaSix from "../components/AboutAreaSix";
import BannerFive from "../components/BannerFive";
import BlogAreaFive from "../components/BlogAreaFive";
import FooterFour from "../components/FooterFour";
import NavbarFour from "../components/NavbarFour";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";
import WorkProcessFour from "../components/WorkProcessFour";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour/>

      {/* Banner Five */}
      <BannerFive/>

      {/* About Area Five */}
      <AboutAreaFive/>

        {/* About Area Six */}
        <AboutAreaSix/>

      {/* Service Area Five */}
      <ServiceAreaFive/>

        {/* Work Process Four */}
        <WorkProcessFour/>


      {/* Team Area Three */}
      <TeamAreaThree/>

      {/* Blog Area Five */}
      <BlogAreaFive/>

      {/* Footer Four */}
      <FooterFour/>
    </>
  );
};

export default HomeFive;
