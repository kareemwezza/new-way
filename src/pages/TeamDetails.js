import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavbarTwo';
import TeamDetailsGroup from '../components/TeamDetailsGroup';
import FooterFour from '../components/FooterFour';

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Team Details'} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterFour/>
    </>
  );
};

export default TeamDetails;
