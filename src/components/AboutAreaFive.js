import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const AboutAreaFive = () => {

  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row pd-bottom-60">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  width="283px"
                  height="230px"
                  className="animate-img-3 z-index-2 top_image_bounce"
                  src="/assets/img/about/about-thumb.png"
                  alt="img"
                />
                <img
                  className="main-img"
                  style={{maxHeight: '450px', width: '100%', objectFit: 'cover'}}
                  src="/assets/img/about/about-newway.webp"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                <h2 className="title">
                  Providing top-notch IT solutions empowering businesses
                </h2>
                <p className="content mb-4">
                  Our team of experts leverages cutting-edge technology to deliver innovative and secure IT services tailored to meet your unique needs
                </p>
                <Link
                  className="btn btn-base-color border-radius-5"
                  to="/about"
                >
                  Discover More <FaArrowRight/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
