import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarTwo = () => {
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
      <nav className="navbar navbar-area navbar-area-2 navbar-expand-lg">
        <div className="container nav-container">
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
            <ul className="navbar-nav menu-open text-lg-end">
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
            <Link className="btn btn-border-base" to="/contact">
              Contact Us
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

export default NavbarTwo;
