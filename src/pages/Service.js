import React from 'react';
import NavBar from '../components/NavbarTwo';
import Breadcrumb from '../components/Breadcrumb';
import ServiceAreaGroup from '../components/ServiceAreaGroup';
import FooterFour from '../components/FooterFour';

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar/>

      {/* Navigation Bar */}
      <Breadcrumb title={'Service'}/>

      {/* Service Area One */}
      <ServiceAreaGroup/>

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterFour/>
    </>
  );
};

export default Service;
