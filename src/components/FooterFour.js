import React, {useEffect, useState} from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin
} from "react-icons/fa";
import {Link} from "react-router-dom";
import config from "../config";

const FooterFour = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const apiUrl = `${config.API_URL}/services?page=1&page_size=4`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setServices(result.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className='footer-area bg-cover mt-0 pd-top-120'
        style={{backgroundImage: 'url("assets/img/bg/14.png")'}}
      >
        <div className='footer-subscribe'>
          <div className='container'>
            <div className='footer-subscribe-inner box-shadow style-2 bg-white p-0 bg-cover'>
              <div className='media bg-base-2'>
                <div className='media-left me-3 align-self-xl-center'>
                  <img src='/assets/img/icon/40.svg' alt='img'/>
                </div>
                <div className='media-body'>
                  <h6 className='text-white'>+(966)-54-044-8767</h6>
                  <p className='mb-0 text-white'>Call 24HR / 7Days</p>
                </div>
              </div>
              <div className='row align-self-center'>
                <div className='col-lg-4'>
                  <div className='border-1'>
                    <input type='text' placeholder='Your Name'/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='border-1'>
                    <input type='text' placeholder='Your Email'/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <a
                    className='btn w-100 btn-black sky border-radius-0'
                    href='#'
                  >
                    Submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <div className='widget widget_contact'>
                  <ul className='details text-white'>
                    {/*<li>*/}
                    {/*  <FaMapMarkerAlt className='sky'/>*/}
                    {/*  Al Sulaimaniyah,*/}
                    {/*  Riyadh 12242 - Saudi Arabia*/}
                    {/*</li>*/}
                    <li className='mt-3'>
                      <FaPhoneAlt className='sky'/> +(966)-54-044-8767
                    </li>
                    <li className='mt-2'>
                      <FaEnvelope className='sky'/> info@newway-jo.com
                    </li>
                  </ul>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href="https://www.linkedin.com/company/newway-solutions-llc" className="linkedin" target="_blank">
                        <FaLinkedin size={90} />
                      </a>
                    </li>
                    {/*<li>*/}
                    {/*  <a href='#' className='sky'>*/}
                    {/*    <FaFacebookF/>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a href='#' className='sky'>*/}
                    {/*    <FaTwitter/>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a href='#' className='sky'>*/}
                    {/*    <FaInstagram/>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a href='#' className='sky'>*/}
                    {/*    <FaYoutube/>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Service</h4>
                <ul>
                  {services.map((service) => (
                    <li className='sky'>
                      <Link to={`/services/${service?.slug}`}>
                        <FaChevronRight/> {service?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>About NewWay</h4>
                <ul>
                  <li className='sky'>
                    <Link to='/about'>
                      <FaChevronRight/> About us
                    </Link>
                  </li>
                  <li className='sky'>
                    <FaChevronRight/> Privacy Policy
                  </li>
                  <li className='sky'>
                    <FaChevronRight/> Terms of use
                  </li>
                  <li className='sky'>
                    <Link to='/contact'>
                      <FaChevronRight/> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© NewWay {new Date().getFullYear()} | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <ul className="page-list-footer">
                  <li>Privacy Policy</li>
                  <li>Terms of use</li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
