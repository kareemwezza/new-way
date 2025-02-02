import React, {useEffect, useState} from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import config from "../config";
const BlogAreaFive = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const apiUrl = `${config.API_URL}/customers?page=1&page_size=9999`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setClients(result.data);
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

        {/*===================== Blog Area Three start =====================*/}
        <div className='blog-area pd-top-60 pd-bottom-90'>
          <div className='container'>
            <div className="section-title text-center pb-3">
              <h2 className="title width-fit-content border-bottom-2 mx-auto">Our Clients</h2>
            </div>
            <div className='client-border-radius p-3 mb-5'>
              <div className='client-slider'>
                <Marquee gradient={false}>
                  {clients.map((client, index) => (
                      <div key={`home:client:${client?.id}:${index}`} className='thumb'>
                        <img src={`${config.FILE_HOST}${client?.image}`} alt='img' height={180}/>
                      </div>
                  ))}
                </Marquee>
              </div>
            </div>
            {/* <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='section-title text-center'>
                  <h2 className='title'>
                    Blogs
                  </h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-blog-list style-3'>
                  <div className='thumb'>
                    <img src='/assets/img/blog/4.png' alt='img'/>
                  </div>
                  <div className='details'>
                    <ul className='blog-meta'>
                      <li>
                      <span>
                        <img src='/assets/img/testimonial/1.png' alt='img'/>
                      </span>{" "}
                        Admin
                      </li>
                      <li>
                        <FaCalendarAlt/> Category
                      </li>
                    </ul>
                    <h5 className='mb-3'>
                      <Link to='/blog-details'>
                        Transforming businesses, one pixel at a time
                      </Link>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                      aliquam
                    </p>
                    <div className='btn-wrap text-end pe-2'>
                      <Link className='read-more-text' to='/blog-details'>
                        Read More <FaPlus/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-blog-list style-3'>
                  <div className='thumb'>
                    <img src='/assets/img/blog/5.png' alt='img'/>
                  </div>
                  <div className='details'>
                    <ul className='blog-meta'>
                      <li>
                      <span>
                        <img src='/assets/img/testimonial/1.png' alt='img'/>
                      </span>{" "}
                        Admin
                      </li>
                      <li>
                        <FaCalendarAlt/> Category
                      </li>
                    </ul>
                    <h5 className='mb-3'>
                      <Link to='/blog-details'>
                        The Importance of a Strong Digital for Strategy
                      </Link>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                      aliquam
                    </p>
                    <div className='btn-wrap text-end pe-2'>
                      <Link className='read-more-text' to='/blog-details'>
                        Read More <FaPlus/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-blog-list style-3'>
                  <div className='thumb'>
                    <img src='/assets/img/blog/6.png' alt='img'/>
                  </div>
                  <div className='details'>
                    <ul className='blog-meta'>
                      <li>
                      <span>
                        <img src='/assets/img/testimonial/1.png' alt='img'/>
                      </span>{" "}
                        Admin
                      </li>
                      <li>
                        <FaCalendarAlt/> Category
                      </li>
                    </ul>
                    <h5 className='mb-3'>
                      <Link to='/blog-details'>
                        Creating Engaging Content: A Guide for Digital
                      </Link>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                      aliquam
                    </p>
                    <div className='btn-wrap text-end pe-2'>
                      <Link className='read-more-text' to='/blog-details'>
                        Read More <FaPlus/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>

        {/* ===================== BlogAreaFive End =====================*/}
      </>
  );
};

export default BlogAreaFive;
