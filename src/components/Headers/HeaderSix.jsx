import React from "react";
import { MobileMenu } from "./MobileMenu";
import { useStickyMenu } from "../../lib/hooks/useStickyMenu";
import { LOGO } from "../../lib/assets";
import { NavMenus } from "./NavMenus";
import { Link } from "react-router-dom";
import { HeaderSearch } from "./HeaderSearch";

export const HeaderSix = () => {
  // menu sticky
  useStickyMenu();

  return (
    <>
      <div id="header-fixed-height"></div>
      <header className="header-style-six">
        <div className="heder-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location"></i>1205/370 Pitt Street
                      Sydney CBD NSW – 2000
                    </li>
                    <li>
                      <i className="flaticon-mail"></i>
                      <a href="mailto:info@482186.co.au">info@482186.co.au</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-contact">
                    <a href="tel:0123456789">
                      <i className="flaticon-phone-call"></i>+61 04 06 107 107
                    </a>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sticky-header" className="menu-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link to="/">
                        <div className="custom-logo-text">
                          <span className="main-text">482-186</span>
                          <span className="sub-text">Work Visa Expert</span>
                        </div>
                      </Link>
                    </div>

                    {/* nav links */}
                    <NavMenus />

                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search">
                          <a href="#">
                            <i className="flaticon-search"></i>
                          </a>
                        </li>
                        <li className="header-btn">
                          <Link to="/contact" className="btn btn-two">
                            Book Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu  */}
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/* header-search */}
        <HeaderSearch />
      </header>
    </>
  );
};
