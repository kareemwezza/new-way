import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const AboutAreaSix = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== AboutAreaSix start  ==================*/}
      <div className="about-area about-area-margin-bottom pd-top-120">
        <div className="container">
          <div className="box-shadow bg-white z-index-2 border-radius-5 p-xl-5 p-4">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-thumb-inner pe-xl-5 pb-5 me-xl-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <img
                    width={'334px'}
                    className="animate-img-4 top_image_bounce z-index-2"
                    src="assets/img/about/24.png"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/about/about_2.webp"
                    alt="img"
                  />
                  <a
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover z-index-2"
                    href="javascript:void(0)"
                  >
                    <img src="assets/img/video.svg" alt="img" />
                  </a>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="XM6kTQPzzpQ"
                  onClose={() => setOpen(false)}
                />
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mt-5 mt-lg-0 mb-0">
                  <h6 className="sub-title-sky-blue">ABOUT COMPANY</h6>
                  <h2 className="title">Innovation Through Is Intelligence</h2>
                  <p className="content">
                    At New Way Solution, we are committed to providing top-notch
                    IT solutions that empower businesses to thrive in a digital
                    world. Our team of experts leverages cutting-edge technology
                    to deliver innovative and secure IT services tailored to
                    meet your unique needs.
                  </p>
                  <p className="content">
                    With a focus on excellence and customer satisfaction, we
                    strive to build long-lasting relationships with our clients,
                    ensuring their success and security in every step of their
                    digital journey.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/25.png"
                            alt="img"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Cyber synapse</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/26.png"
                            alt="img"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Cyber synapse</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/27.png"
                            alt="img"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Cyber synapse</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== AboutAreaSix End  ==================*/}
    </>
  );
};

export default AboutAreaSix;
