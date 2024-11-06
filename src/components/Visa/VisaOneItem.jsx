import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon

export const VisaOneItem = ({ visa }) => {
  return (
    <div className="services-item">
      <div className="services-content">
        <div className="content-top">
          <div className="icon">
            {/* Use FontAwesomeIcon component here */}
            <FontAwesomeIcon icon={visa.icon} size="1x" />
          </div>

          <h2 className="title">{visa.title} </h2>
        </div>

        <div className="services-thumb">
          <img src={visa.src} alt="Hello World" />

          <Link to={visa.href} className="btn transparent-btn">
            Our Visas
          </Link>
        </div>

        <ul className="list-wrap">
          <li>seusmeyd tempose atidim area</li>
          <li>aliquam duhipsum is simply free</li>
          <li>Get Life Time Access</li>
        </ul>
      </div>
    </div>
  );
};
