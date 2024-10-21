import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faClipboardCheck,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";
import { Odometer } from "../Odometer/Odometer";
import {
  OVERVIEW_IMG01,
  OVERVIEW_IMG02,
  OVERVIEW_IMG_SHAPE,
} from "../../lib/assets";

export const OverviewAreaOne = () => {
  return (
    <section className="overview-area pt-120 pb-120">
      <div
        className="overview-shape"
        data-aos="fade-left"
        data-aos-delay="200"
      ></div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="overview-img-wrap">
              <img src={OVERVIEW_IMG01} alt="Overview" />
              <img
                src={OVERVIEW_IMG02}
                alt="Additional Shape"
                data-parallax='{"x" : 50 }'
              />
              <img src={OVERVIEW_IMG_SHAPE} alt="Shape" />
              <div className="icon">
                <FontAwesomeIcon icon={faVideo} size="1x" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="overview-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                <span className="sub-title">Our Services</span>
                <h2 className="title tg-element-title">
                  Expert Guidance for Your Immigration and Consultation Needs
                </h2>
              </div>
              <p className="info-one">
                We provide comprehensive services including video consultations,
                skill assessment assistance, and visa application guidance. Our
                team of experts will help you every step of the way.
              </p>
              <p className="info-two">
                Whether you need personalized consultations or support with
                complex applications, we ensure a smooth and hassle-free
                experience tailored to your needs.
              </p>
              <div className="content-bottom">
                <ul className="list-wrap d-flex justify-content-between">
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon icon={faClipboardCheck} size="1x" />
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={1500} />+
                      </h2>
                      <p style={{ fontSize: "10px" }}>Assessments Completed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon icon={faPassport} size="1x" />
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={200} />+
                      </h2>
                      <p style={{ fontSize: "10px" }}>Applications Approved</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
