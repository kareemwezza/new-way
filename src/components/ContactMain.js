import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_yipk4xg", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='contact-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='contact-page-inner bg-gray'>
            <div className='section-title mb-4 pb-2'>
              <h2 className='title'>Direct contact us? </h2>
              <p className='content mb-0'>
                For your car we will do everything advice, repairs and
                maintenance. We are the some preferred choice by many car owners
                because our experience and knowledge is selfe vident.For your
                car we will do som everything.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='name'
                      name='user_name'
                      type='text'
                      placeholder='Enter Your Name.'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='email'
                      name='user_email'
                      type='email'
                      placeholder='Enter Your Email.'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='subject'
                      name='subject'
                      type='text'
                      placeholder='Enter Your Subject.'
                      required
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='single-input-inner'>
                    <textarea
                      name='message'
                      id='massage'
                      cols='1'
                      rows='5'
                      placeholder='Enter Your Massage ...'
                      required
                    />
                  </div>
                </div>
                <div className='col-12 text-center'>
                  <button
                    className='btn btn-base border-radius-5'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='/assets/img/icon/13.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Contacts us</h5>
                  <h6>+(966)-54-044-8767</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='/assets/img/icon/14.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Your Email</h5>
                  <h6>info@newway-jo.com</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='/assets/img/icon/15.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Location</h5>
                  <h6>T1-TF-6 Amenity Centre - RAKEZ Al Hamra Industrial Zone-FZ RAK, United Arab Emirates</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className='contact-g-map'>
        <iframe
            title="T1-TF-6 Amenity Centre - RAKEZ Al Hamra Industrial Zone-FZ RAK, United Arab Emirates"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.549022844266!2d55.79583357597161!3d25.68624021171815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a61412b1615%3A0x8382e57f1d189185!2sRakez%20AlHamra%20Industrial%20Zone!5e0!3m2!1sen!2seg!4v1737441642087!5m2!1sen!2seg" />
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
