import React from 'react';
import { Link } from 'react-router-dom';

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className="service-area bg-gray bg-relative pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title-sky-blue">Our Best Service</h6>
                <h2 className="title">
                  Unlocking The Potential Of Data With Ai
                </h2>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/7.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">
                      Identity & Access Management(IAM)
                    </Link>
                  </h5>
                  <p className="mb-0">
                    Enhance your security posture with our robust IAM solutions.
                    We help you manage digital identities and control access to
                    critical information within your organization.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/10.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Single Sign-On(SSO)</Link>
                  </h5>
                  <p className="mb-0">
                    Simplify user access with our SSO services. We enable
                    seamless and secure access to multiple applications using
                    one set of credentials.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/9.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">
                      Multi-Factor Authentication(MFA)
                    </Link>
                  </h5>
                  <p className="mb-0">
                    Add an extra layer of security with our MFA solutions. We
                    help you implement strong authentication methods to
                    safeguard sensitive data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src="assets/img/about/D4.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/8.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">
                      Privilege Access Management(PAM)
                    </Link>
                  </h5>
                  <p className="mb-0">
                    Protect your organization from potential threats with our
                    PAM services. We ensure that privileged accounts are
                    monitored and controlled effectively.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/11.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Log Management</Link>
                  </h5>
                  <p className="mb-0">
                    Improve your security monitoring and compliance with our log
                    management solutions. We help you collect, analyze, and
                    manage logs effectively.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/12.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Cyber Security</Link>
                  </h5>
                  <p className="mb-0">
                    Fortify your defenses with our comprehensive cyber security
                    services. We protect your organization from cyber threats
                    and ensure data integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
