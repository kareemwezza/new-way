import React, {useEffect, useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import serviceList from '../scripts/serviceList';
import config from '../config';

const ServiceAreaGroup = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const apiUrl = `${config.API_URL}/services`;

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
      {/*=================== service area start ===================*/}
      <div className="service-area bg-relative mb-5 pd-top-100">
        <img
          className="position-bottom-left top_image_bounce"
          src="/assets/img/icon/4.png"
          alt="img"
        />
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Comprehensive IT Services</h6>
            <h2 className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row position-relative">
            <img
                className='top_image_bounce animate-img-1 w-auto'
                src='/assets/img/banner/2.png'
                alt='img'
            />
            <img
                className='top_image_bounce animate-img-2 w-auto'
                src='/assets/img/about/6.png'
                alt='img'
            />
            {services.map((data, index) => (
                <div key={`service:${data?.id}:${index}`} className="col-lg-4 col-md-6">
                  <div className="single-service-inner text-center">
                    <div className="thumb">
                      <img src={serviceList[index].img} alt="img"/>
                    </div>
                    <div className="details">
                      <h5>
                        <Link to={`/services/${data.slug}`}>{data.title}</Link>
                      </h5>
                      <p>{data?.short_description || ''}</p>
                      <Link className="btn btn-border-base" to={`/services/${data.slug}`}>
                        Touch More <FaPlus/>
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;
