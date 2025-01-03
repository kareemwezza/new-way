import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavbarTwo';
import TeamAreaGroup from '../components/TeamAreaGroup';
import FooterFour from '../components/FooterFour';

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Team'} />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterFour/>
    </>
  );
};

export default Team;
