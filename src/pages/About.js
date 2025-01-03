import React from 'react';
import AboutAreaOne from '../components/AboutAreaOne';
import Breadcrumb from '../components/Breadcrumb';
import ContactAreaOne from '../components/ContactAreaOne';
import CounterAreaOne from '../components/CounterAreaOne';
import FaqAreaOne from '../components/FaqAreaOne';
import NavBar from '../components/NavbarTwo';
import TeamAreaOne from '../components/TeamAreaOne';
import WorkProcessOne from '../components/WorkProcessOne';
import FooterFour from '../components/FooterFour';

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar/>

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'}/>

      {/* About Area One */}
      <AboutAreaOne/>

      {/* FAQ Area One */}
      <FaqAreaOne/>

      {/* Team Area One */}
      <TeamAreaOne/>

      {/* Counter Area One */}
      <CounterAreaOne/>

      {/* Contact Area One */}
      <ContactAreaOne/>

      {/* Work Process One */}
      <WorkProcessOne/>

      {/* Footer One */}
      <FooterFour/>
    </>
  );
};

export default About;
