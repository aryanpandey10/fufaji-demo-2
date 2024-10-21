import React from "react";
import { CHOOSE_SHAPE } from "../../lib/assets";
import { VideoPlayerOne } from "../VideoPlayers/VideoPlayerOne";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLightbulb,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export const ChooseAreaOne = () => {
  return (
    <section className="choose-area jarallax choose-bg">
      <div className="choose-shape">
        <img
          src={CHOOSE_SHAPE}
          alt="Shape"
          data-aos="fade-right"
          data-aos-delay="0"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  Get the Best Immigration and Consultation Services
                </h2>
              </div>
              <p>
                Our team of experts provides tailored solutions to help you
                navigate immigration, business setups, and strategic planning.
                Trust our experience to guide you towards success.
              </p>

              <VideoPlayerOne
                src="https://www.youtube.com/embed/XMWYZ-uZjnQ"
                text="Watch Overview"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skill-wrap wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title-two mb-15">
                <span className="sub-title">Why Choose Us</span>
                <h2 className="title">
                  Professional Guidance for Immigration & Strategy
                </h2>
              </div>
              <p>
                With years of experience and a dedicated team, we deliver
                comprehensive solutions to ensure your success in immigration,
                consulting, and business ventures.
              </p>

              <div className="progress-wrap">
                <div className="progress-item">
                  <h6 className="title">
                    <FontAwesomeIcon icon={faGlobe} className="me-2" />
                    Immigration Services
                  </h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Immigration Services"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".1s"
                      style={{
                        width: "95%",
                      }}
                    >
                      <span>95%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-item">
                  <h6 className="title">
                    <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                    Strategic Planning
                  </h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Strategic Planning"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".2s"
                      style={{ width: "80%" }}
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-item">
                  <h6 className="title">
                    <FontAwesomeIcon icon={faHandshake} className="me-2" />
                    Business Consultation
                  </h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Business Consultation"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".3s"
                      style={{ width: "90%" }}
                    >
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
