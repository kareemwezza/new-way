import React, {useCallback, useEffect, useState} from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import config from "../config";
import Breadcrumb from "./Breadcrumb";

const ServiceDetailsArea = () => {
  const { slug } = useParams();
  const [isInitial, setIsInitial] = useState(false);
  const [isInitialServices, setIsInitialServices] = useState(false);
  const [isInitialService, setIsInitialService] = useState(false);
  const [saveSlug, setSaveSlug] = useState('');
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});

  const fetchServices = useCallback(async () => {
    if (isInitial && services.length <= 0) {
      try {
        const apiServicesUrl = `${config.API_URL}/services?page=1&page_size=5`;
        const response = await fetch(apiServicesUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setServices([...result.data]);
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    }
  }, [isInitial, services, setServices]);

  const fetchService = useCallback(async () => {
    if (isInitial ? Object.keys(service).length <= 0 : saveSlug !== slug) {
      try {
        const apiServiceUrl = `${config.API_URL}/services/${slug}`;
        const response = await fetch(apiServiceUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setService({...result.data});
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    }
  }, [isInitial, slug, saveSlug, service, setService]);

  useEffect(() => {
    if (isInitial) {
      if (!isInitialServices && services.length <= 0) {
        setIsInitialServices(true);
        fetchServices();
      }
      if (!isInitialService ? Object.keys(service).length <= 0 : saveSlug !== slug) {
        setSaveSlug(slug);
        setIsInitialService(true);
        fetchService();
      }
    }
  }, [slug, saveSlug, setSaveSlug, isInitial, isInitialServices, setIsInitialServices, isInitialService, setIsInitialService, services, service, fetchServices, fetchService]);

  useEffect(() => {
    setIsInitial(true);
    return () => {
      setIsInitial(false);
      setIsInitialServices(false);
      setIsInitialService(false);
    }
  }, [setIsInitial, setIsInitialServices, setIsInitialService]);

  return (
    <>
      {/* Navigation Bar */}
      <Breadcrumb title={service.title} />
      {/* ===================== Service Details Area start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row pd-top-60'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                  <h5 className='widget-title'>
                    <Link to="/services">
                      <FaArrowRight/> All Service lists
                    </Link>
                  </h5>
                  <ul className='catagory-items'>
                    {services.length > 0 && services.map((service) => (
                        <li key={`catagory-items-service-${service.id}`}>
                          <Link to={`/services/${service.slug}`}>{service.title}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src={service.image ? `${config.FILE_HOST}/${service.image}` : '/assets/img/service/7.png'}
                         alt='img'/>
                  </div>
                  <div className='details'>
                    <h4>
                      {service.title}
                    </h4>
                    <p dangerouslySetInnerHTML={{__html: service.content}}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default ServiceDetailsArea;
