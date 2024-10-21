import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import {
  faPassport,
  faFileAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"; // Import desired icons
import { FEATURES_SHAPE01, FEATURES_SHAPE02 } from "../../lib/assets";

export const FeatureFive = () => {
  const FEATURE_LIST = [
    {
      id: 1,
      icon: faPassport, // Using Font Awesome for Australian Work Visas
      title: "Australian Work Visas",
      subtitle:
        "Expert guidance to secure your Australian work visa with ease.",
    },
    {
      id: 2,
      icon: faFileAlt, // Using Font Awesome for Visa Application Assistance
      title: "Visa Application Assistance",
      subtitle:
        "Comprehensive support to ensure your visa application is accurate and complete.",
    },
    {
      id: 3,
      icon: faUserTie, // Using Font Awesome for Migration Advisory
      title: "Migration Advisory",
      subtitle:
        "Tailored advice to make the migration process stress-free and efficient.",
    },
  ];

  return (
    <section className="features-area-five features-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Our Core Services</span>
              <h2 className="title">
                Your Pathway to Australian Migration Success
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {FEATURE_LIST.map((feature) => (
            <div key={feature.id} className="col-lg-4 col-md-6">
              <div className="features-item">
                <div className="features-content">
                  <div className="content-top">
                    <div className="icon">
                      <FontAwesomeIcon icon={feature.icon} />{" "}
                      {/* FontAwesome Icon */}
                    </div>
                    <h2 className="title">{feature.title}</h2>
                  </div>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-shape-wrap">
        <img src={FEATURES_SHAPE01} alt="shape1" />
        <img src={FEATURES_SHAPE02} alt="shape2" />
      </div>
    </section>
  );
};
