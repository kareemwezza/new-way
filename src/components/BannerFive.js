import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const BannerFive = () => {
  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 pb-0 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner-5/5.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-xl-5 align-self-center">
              <div className="banner-inner pe-xl-4 pb-5">
                <h2
                  className="title text-white"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  Secure Your Digital Future with New Way Solution
                </h2>
                <Link
                  className="btn btn-border-base-2"
                  data-aos="fade-right"
                  data-aos-delay="450"
                  data-aos-duration="1500"
                  to="/services"
                >
                  Discover More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 align-self-end">
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <div className="main-img-wrap">
                  <div>
                    <img
                      className="main-img"
                      src="/assets/img/banner-5/newway_banner.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerFive;
