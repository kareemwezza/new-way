import React from 'react';
import BlogDetailsArea from '../components/BlogDetailsArea';
import Breadcrumb from '../components/Breadcrumb';
import FooterFour from '../components/FooterFour';
import NavBar from '../components/NavbarTwo';

const BlogDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Blog Details'} />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default BlogDetails;
