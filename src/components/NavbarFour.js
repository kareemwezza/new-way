import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarFour = () => {
  const [active, setActive] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };

  // Control sidebar navigation
  let items = document.querySelectorAll('.menu-item-has-children > a');
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector('.sub-menu')
          .classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }
  return (
    <>
      {/* ==================== Navbar Two Start ====================*/}
      <nav className="navbar navbar-area navbar-area-3 navbar-expand-lg">
        <div className="container nav-container custom-container">
          <div className="logo">
            <Link to="/">
              <img src="/assets/img/NWS-logo.png" alt="img" />
            </Link>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5 navbarFive">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
              <li>
                <Link to="/clients">Clients</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <Link
              className="btn btn-base-color border-radius-5 d-flex align-items-center"
              to="/contact"
            >
              Contact Us <FaArrowRight className="mt-0" />
            </Link>
          </div>
          <div className="responsive-mobile-menu">
            <button
                onClick={menuActive}
                className={
                  active
                      ? 'menu toggle-btn d-block d-lg-none open'
                      : 'menu toggle-btn d-block d-lg-none'
                }
                data-target="#itech_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarFour;
