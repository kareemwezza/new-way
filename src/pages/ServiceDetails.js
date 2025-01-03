import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavbarTwo';
import ServiceDetailsArea from '../components/ServiceDetailsArea';

const ServiceDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service Details'} />

      {/* Service Details Area */}
      <ServiceDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
