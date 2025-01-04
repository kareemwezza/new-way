import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CaseStudyArea from "../components/CaseStudyArea";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";

const CaseStudyDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Case Study Details"} />

      {/* Case Study Area */}
      <CaseStudyArea />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default CaseStudyDetails;
