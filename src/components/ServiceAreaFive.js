import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';

const ServiceAreaFive = () => {
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
      {/*=================== service area five start ===================*/}
      <div className="service-area bg-gray bg-relative pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">
                  Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              {services.slice(0, 3).map((service, index) => (
                <div className="single-service-inner-3 single-service-inner-3-left">
                  <div className="thumb">
                    <div className="thumb-inner">
                      <img src={'assets/img/service-icon/' + (index + 7) + '.svg'} alt="img"/>
                    </div>
                  </div>
                  <div className="details">
                    <h5 className="mb-3">
                      <Link to={`/services/${service?.slug}`}>
                        {service.title}
                      </Link>
                    </h5>
                    <p className="mb-0">
                      {service?.short_description || ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src="/assets/img/about/D4.png" alt="img"/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {services.slice(3, 6).map((service, index) => (
                <div className="single-service-inner-3 single-service-inner-3-right">
                  <div className="thumb">
                    <div className="thumb-inner">
                      <img src={'assets/img/service-icon/' + (index + 10) + '.svg'} alt="img"/>
                    </div>
                  </div>
                  <div className="details">
                  <h5 className="mb-3">
                      <Link to={`/services/${service?.slug}`}>
                        {service.title}
                      </Link>
                    </h5>
                    <p className="mb-0">
                      {service?.short_description || ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
