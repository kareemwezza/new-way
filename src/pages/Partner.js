import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import NavBar from '../components/NavbarTwo';
import PartnerAreaGroup from '../components/PartnerAreaGroup';
import FooterFour from '../components/FooterFour';

const Partner = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Partner'} />

      {/* Team Area Group */}
      <PartnerAreaGroup />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default Partner;
