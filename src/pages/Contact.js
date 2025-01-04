import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactMain from '../components/ContactMain';
import FooterFour from '../components/FooterFour';
import NavbarTwo from '../components/NavbarTwo';

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={'Contact'} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default Contact;
