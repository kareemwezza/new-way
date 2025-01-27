import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='main-img'
                  src='/assets/img/about/About1.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  At <span>New Way Solutions</span>
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  we are committed to providing top-notch IT solutions that empower businesses to thrive in a digital world. Our team of experts leverages cutting-edge technology to deliver innovative and secure IT services tailored to meet your unique needs. With a focus on excellence and customer satisfaction, we strive to build long-lasting relationships with our clients, ensuring their success and security in every step of their digital journey
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='/assets/img/icon/2.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Vision</h5>
                        <p>
                          Empowering businesses with secure, efficient, and compliant IT solutions for seamless infrastructure management, data protection, and advanced cybersecurity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='/assets/img/icon/3.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Mission</h5>
                        <p>
                          Delivering trusted IT solutions in IAM, PAM, MFA, and MDM to protect assets, streamline operations, and manage risks with tailored support and measurable results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
