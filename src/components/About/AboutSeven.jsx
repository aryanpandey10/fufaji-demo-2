import React from "react";
import { Link } from "react-router-dom";
import { Odometer } from "../Odometer/Odometer";
import {
  INNER_ABOUT_IMG01,
  INNER_ABOUT_IMG02,
  INNER_ABOUT_SHAPE01,
} from "../../lib/assets";

export const AboutSeven = () => {
  return (
    <section className="about-area-seven pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about-img-seven-wrap">
              <img
                src={INNER_ABOUT_IMG01}
                alt=""
                data-aos="fade-right"
                data-aos-delay="0"
              />
              <img
                src={INNER_ABOUT_IMG02}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <img
                src={INNER_ABOUT_SHAPE01}
                alt=""
                className="shape"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              <div
                className="experience-wrap"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <h2 className="title">35</h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-seven">
              <div className="section-title mb-30">
                <span className="sub-title">Who We Are</span>
                <h2 className="title">
                  Australian Work Visa Experts with Over 35 Years of Experience
                </h2>
              </div>
              <p>
                The migration team at <strong>482-186</strong> has a combined
                experience of well over 35 years within the Australian migration
                field. Our expert Australian migration agents handle your case
                from start to finish, ensuring your work visa for Australia is
                in safe hands.
              </p>

              <div className="success-wrap-two">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <i className="flaticon-investment"></i>
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={152} />K
                      </h2>
                      <p>Visa Applications</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-business-presentation"></i>
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={98} />%
                      </h2>
                      <p>Success Rate</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="info-two">
                Whether you have one year of full-time work experience within
                your field or more than 3 years of experience, our team will
                guide you through the entire process, from initial consultation
                to final approval.
              </p>

              <Link to="/contact" className="btn btn-three">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
