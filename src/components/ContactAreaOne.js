import React from "react";

const ContactAreaOne = () => {
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className='contact-area pd-bottom-90 pd-top-90'>
        <div className='container'>
          <div className='contact-inner-1'>
            <img
              className='top_image_bounce animate-img-1'
              src='/assets/img/banner/2.png'
              alt='img'
            />
            <img
              className='top_image_bounce animate-img-2'
              src='/assets/img/about/6.png'
              alt='img'
            />
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src='/assets/img/about/AboutContact.png' alt='img' />
              </div>
              <div
                className='col-lg-4 wow animated fadeInRight'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  <h2 className='title'>
                    Let us help you design a customized <span>security and IT</span> solution
                  </h2>
                  <p className='content'>
                    that meets your specific needs and budget. Contact us today for a free consultation.
                  </p>
                  <form className='mt-4'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Phone' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Subject' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single-input-inner style-border'>
                          <textarea placeholder='Message' defaultValue={""} />
                        </div>
                      </div>
                      <div className='col-12'>
                        <a
                          className='btn btn-black mt-0 w-100 border-radius-5'
                          href='#'
                        >
                          Submit now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
