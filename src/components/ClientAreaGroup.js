import React, {useEffect, useState} from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import config from "../config";

const ClientAreaGroup = () => {
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
      {/* ================= TeamAreaGroup Start =================*/}
      <div className='team-area bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
          {clients.map((client, index) => (
            <div key={`client:${client.id}:${index}`} className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src={client?.image && `${config.FILE_HOST}${client?.image}` || '/assets/img/team/1.png'} alt='img' />
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {/* ================= TeamAreaGroup End =================*/}
    </>
  );
};

export default ClientAreaGroup;
