import React from "react";

const WorkProcessFour = () => {
  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div
        className='work-process-area bg-position-right pd-top-120 pd-bottom-90'
        style={{backgroundImage: 'url("./assets/img/bg/16.png")'}}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center pb-5'>
                <h6 className='sub-title-sky-blue'>WORK PROCESS</h6>
                <h2 className='title'>
                  Empowering Your Business With Artificial
                </h2>
              </div>
            </div>
          </div>
          <div className='work-process-area-inner-2'>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/36.svg' alt='img'/>
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Assessment</h5>
                    <p className='content'>
                      Analyze client needs and IT infrastructure to design tailored cybersecurity and IT solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/37.svg' alt='img'/>
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Implementation</h5>
                    <p className='content'>
                      Deploy identity management, multi-factor authentication, and security measures into the system
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/38.svg' alt='img'/>
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Monitoring & Support</h5>
                    <p className='content'>
                      Provide continuous system monitoring, log management, and 24/7 support to ensure security.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/39.svg' alt='img'/>
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Optimization</h5>
                    <p className='content'>
                      Regularly evaluate and optimize IT services to adapt to evolving technologies and business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessFour;
