import React, {useEffect, useState} from "react";
import config from "../config";

const PartnerAreaGroup = () => {
  const [partners, setPartners] = useState([]);
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
      {/* ================= TeamAreaGroup Start =================*/}
      <div className='team-area bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            {partners.map((partner, index) => (
              <div key={`partner:${partner?.id}:${index}`} className='col-lg-4 col-md-6'>
                <div className='single-team-inner text-center'>
                  <div className='thumb'>
                    <img src={partner?.image ? `${config.FILE_HOST}${partner?.image}` : '/assets/img/team/1.png'} alt='img'/>
                  </div>
                  <div className='details'>
                    <h5>
                      <a href={partner?.website} rel="noreferrer" target="_blank">{partner?.name}</a>
                    </h5>
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

export default PartnerAreaGroup;
