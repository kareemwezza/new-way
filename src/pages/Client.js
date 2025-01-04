import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import NavBar from '../components/NavbarTwo';
import ClientAreaGroup from '../components/ClientAreaGroup';
import FooterFour from '../components/FooterFour';

const Client = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Clients'} />

      {/* Team Area Group */}
      <ClientAreaGroup />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default Client;
