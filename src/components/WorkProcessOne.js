import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2 className='title'>
              Why Choose Us
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='/assets/img/icon/9.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='content'>
                    Choosing New Way Solution means partnering with a team of dedicated professionals who prioritize your security and efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='/assets/img/icon/10.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='content'>
                    Our expertise in identity and access management, cyber security, and IT service management ensures that your business is protected and optimized for success.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='/assets/img/icon/11.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='content'>
                    We offer customized solutions, exceptional customer service, and a proactive approach to managing your IT infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='/assets/img/icon/12.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='content'>
                    Trust us to be your reliable IT partner, committed to your growth and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
