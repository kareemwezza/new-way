import React from "react";

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className='container'>
          <div className='row pd-top-120'>
            <div
              className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner pt-lg-3'>
                <img
                  className='main-img'
                  src='/assets/img/about/About2.png'
                  alt='img'
                />

              </div>
            </div>
            <div
              className='col-xl-7 col-lg-6'
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h2 className='title'>
                  What <span>Are</span> Unique
                </h2>
                <p className='content'>
                  What sets New Way Solutions apart is our unwavering commitment to innovation and excellence. Our holistic approach to IT management encompasses a wide range of services, from cyber security to mobile device management, ensuring comprehensive protection and efficiency. We pride ourselves on our ability to adapt to the ever-changing digital landscape, providing solutions that are not only effective but also future-proof. With New Way Solutions , you get a partner who understands your business and is dedicated to helping you achieve your goals with confidence and security
                </p>
              </div>
              <div
                  className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                  id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                    >
                      Secure Access & Identity
                    </button>
                  </h2>
                  <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>> Implement robust Multi-Factor Authentication (MFA) with Symantec VIP (2FA)</p>
                      <p>>Leverage Symantec Web Protection Suite (WPS) for secure web browsing</p>
                      <p>>Secure your network perimeter with next-generation firewalls (NGFW) from Palo Alto
                        Networksexclamation</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                    >
                      Threat Detection & Response
                    </button>
                  </h2>
                  <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p> Gain comprehensive threat detection and response with Palo Alto Networks Cortex XDR and Cortex
                        XSOAR</p>
                      <p>Secure your cloud environment with Symantec CloudSOC CASB </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                    >
                      Endpoint Security
                    </button>
                  </h2>
                  <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>Protect your devices from malware and advanced threats with Symantec Endpoint Protection (SEP)
                        and Endpoint Detection and Response (EDR) </p>
                      <p>Ensure data privacy with Symantec Endpoint Encryption (PGP)</p>
                      <p>Fortify endpoint security with TrilleX HX and Email Security (EX)</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading4'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse4'
                        aria-expanded='false'
                        aria-controls='collapse4'
                    >
                      Data Security & Compliance
                    </button>
                  </h2>
                  <div
                      id='collapse4'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading4'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>Prevent data breaches with Symantec Data Loss Prevention (DLP)</p>
                      <p>Enforce data security policies with TrilleX Network Security (NX) and Central Management System
                        (CMS)</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading5'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse5'
                        aria-expanded='false'
                        aria-controls='collapse5'
                    >
                      Email Security
                    </button>
                  </h2>
                  <div
                      id='collapse5'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading5'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>Block phishing attempts and malware with Symantec Email Security.cloud and TrilleX Email Threat Protection (ETP)exclamation</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading6'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse6'
                        aria-expanded='false'
                        aria-controls='collapse6'
                    >
                      Network Management & Monitoring
                    </button>
                  </h2>
                  <div
                      id='collapse6'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading6'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>Gain real-time insights into network performance with SolarWinds Network Performance Management (NPM), Network Traffic Analyzer (NTA), and Network Configuration Manager (NCM)</p>
                      <p>Optimize database performance with SolarWinds Database Performance Analyzer (DPA)</p>
                      <p>Monitor server and application health with SolarWinds Server & Application Monitor (SAM)</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading7'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse7'
                        aria-expanded='false'
                        aria-controls='collapse7'
                    >
                      Virtualization & Cloud Security
                    </button>
                  </h2>
                  <div
                      id='collapse7'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading7'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>Manage virtual environments effectively with SolarWinds Virtualization Manager (VMAN)</p>
                      <p>Ensure efficient storage resource utilization with SolarWinds Storage Resource Monitor (SRM)</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading8'>
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse8'
                        aria-expanded='false'
                        aria-controls='collapse8'
                    >
                      Additional Solutions
                    </button>
                  </h2>
                  <div
                      id='collapse8'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading8'
                      data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>Enable secure remote access with Citrix solutions like Application Delivery Controller (ADC),
                        Virtual Desktop Infrastructure (VDI), and VPN Gateway</p>
                      <p>Protect against file-based threats with TrilleX File Protect (FX)</p>
                      <p>Perform advanced malware analysis with TrilleX Malware Analysis (AX)</p>
                      <p>Simplify user and device management with Ivanti Security Control (i-Sec)exclamation</p>
                      <p>Deliver application security with F5 BIG-IP Local Traffic Manager and Web Application Firewall (WAF)</p>
                      <p>Enhance file transfer security with OPSWAT MetaDefender and MetaAccess</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
