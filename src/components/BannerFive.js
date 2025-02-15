import React from 'react';
import { Link } from 'react-router-dom';

const BannerFive = () => {
  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 pb-0 bg-cover"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/img/home/Hero.png")'
        }}
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
                  Secure Your Digital Future with New Way Solutions
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
            <div className="col-lg-6 col-md-9 align-self-end" />
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerFive;
