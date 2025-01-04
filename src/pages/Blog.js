import React from 'react';
import BlogGroup from '../components/BlogGroup';
import Breadcrumb from '../components/Breadcrumb';
import FooterFour from '../components/FooterFour';
import NavBar from '../components/NavbarTwo';

const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Blog'} />

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default Blog;
