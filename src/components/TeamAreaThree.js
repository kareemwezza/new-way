import React, {useEffect, useState} from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import config from "../config";

const TeamAreaThree = () => {
  const [partners, setPartners] = useState([]);
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaAngleRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaAngleLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    const apiUrl = `${config.API_URL}/partners?page=1&page_size=9999`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setPartners(result.data);
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
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("assets/img/bg/15.png")' }}
      >
        <div className='container pd-top-120'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='section-title style-white'>
                <h6 className='sub-title-sky-blue'>MEET OUR EXPERTS</h6>
                <h2 className='title'>Innovation Through Is Intelligence</h2>
              </div>
            </div>
          </div>
          <div className='team-slider owl-carousel slider-control-square slider-control-right-top'>
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div key={`home:partner:${partner?.id}:${index}`} className='item px-3'>
                  <div className='single-team-inner text-center border-radius-5 bg-white'>
                    <div className='thumb bg-gray border-radius-5'>
                      <img src={partner?.image && `${config.FILE_HOST}${partner?.image}` || '/assets/img/team/1.png'} alt='img'/>
                    </div>
                    <div className='details'>
                      <h5>
                        <a href={partner?.website} rel="noreferrer" target="_blank">{partner?.name}</a>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaThree;
