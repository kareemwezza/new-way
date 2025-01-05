import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterFour from '../components/FooterFour';
import NavBar from '../components/NavbarTwo';
import ServiceDetailsArea from '../components/ServiceDetailsArea';

const ServiceDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Service Details Area */}
      <ServiceDetailsArea />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default ServiceDetails;
