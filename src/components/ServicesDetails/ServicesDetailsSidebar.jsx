import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { services } from "../../mocks/servicesData";
import { SERVICES_DETAILS01 } from "../../lib/assets";

export const ServicesDetailsSidebar = ({
  hideContact = false,
  hideTitle = false,
}) => {
  const location = useLocation(); // Get current location
  const [activeService, setActiveService] = useState(location.pathname);

  // Update the active service when the route changes
  useEffect(() => {
    setActiveService(location.pathname);
  }, [location]);

  return (
    <aside className="services-sidebar">
      {/* Our Services */}
      {hideTitle ? (
        <div className="services-cat-list mb-30">
          <ul className="list-wrap">
            {services.map((item) => (
              <li
                key={item.title}
                className={cn({ active: activeService === item.href })}
              >
                <Link
                  to={item.href}
                  onClick={() => setActiveService(item.href)}
                >
                  {item.title} <i className="flaticon-right-arrow"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="services-widget">
          <h4 className="sw-title">Our Services</h4>
          <div className="services-cat-list">
            <ul className="list-wrap">
              {services.map((item) => (
                <li
                  key={item.title}
                  className={cn({ active: activeService === item.href })}
                >
                  <Link
                    to={item.href}
                    onClick={() => setActiveService(item.href)}
                  >
                    {item.title} <i className="flaticon-right-arrow"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Brochure */}
      <div className="services-widget">
        <h4 className="sw-title">Brochure</h4>
        <div className="services-brochure-wrap">
          <p>When an unknown printer took ga lley offer typey anddey.</p>
          <a
            href={SERVICES_DETAILS01}
            target="_blank"
            download
            className="download-btn"
          >
            <i className="far fa-file-pdf"></i>PDF. Download
          </a>
          <a
            href={SERVICES_DETAILS01}
            target="_blank"
            download
            className="download-btn"
          >
            <i className="far fa-file-alt"></i>DOC. Download
          </a>
        </div>
      </div>

      {/* Contact */}
      {!hideContact && (
        <div className="services-widget services-sidebar-contact">
          <h4 className="title">If You Need Any Help Contact With Us</h4>
          <a href="tel:0123456789">
            <i className="flaticon-phone-call"></i> +91 705 2101 786
          </a>
        </div>
      )}

      {/* Get A Free Quote */}
      <div className="services-widget">
        <h4 className="sw-title">Get a Free Quote</h4>
        <div className="services-widget-form">
          <form action="#">
            <div className="form-grp">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-grp">
              <input type="email" placeholder="E-mail Address" />
            </div>
            <div className="form-grp">
              <textarea
                name="message"
                placeholder="Type Your Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};
