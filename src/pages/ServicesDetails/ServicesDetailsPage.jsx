import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServicesDetailsFaq } from "../../components/ServicesDetails/ServicesDetailsFaq";
import { CHECK_ICON, SD_VIDEO_IMG, SERVICES_DETAILS01 } from "../../lib/assets";
import { ServicesDetailsWrapper } from "../../components/ServicesDetails/ServicesDetailsWrapper";
import { VideoPlayerOne } from "../../components/VideoPlayers/VideoPlayerOne";
import { BrandSeven } from "../../components/Brand/BrandSeven";

const ServicesDetailsPage = () => {
  return (
    <Layout breadcrumb={"Services"} title={"Service Details"}>
      {/* services-details-area */}
      <ServicesDetailsWrapper hideContact hideTitle>
        <div className="services-details-wrap">
          <div className="services-details-thumb">
            <img src={SERVICES_DETAILS01} alt="Service Details" />
          </div>

          <div className="services-details-content">
            <h2 className="title">Comprehensive Video Consultation Services</h2>
            <p>
              Our team at 482186 assists clients in identifying issues,
              developing tailored migration solutions, and supporting them
              through the visa application process. We offer an integrated suite
              of migration and visa services, and, where specialized knowledge
              is required, we collaborate with trusted partners to deliver
              expert advice.
            </p>
            <p>
              Whether you are seeking assistance with a TSS 482 Visa, SC 186
              Visa, or skills assessment, our experienced agents ensure your
              application is handled with care and professionalism. We are here
              to guide you every step of the way to make your migration journey
              as smooth as possible.
            </p>

            <div className="sd-inner-wrap">
              <div className="row align-items-center">
                <div className="col-56">
                  <div className="content">
                    <h3 className="title-two">
                      Raise Capital Faster & Negotiate on Your Own Terms
                    </h3>
                    <p>
                      With our guidance, clients can access a streamlined
                      approach to their visa and migration needs. We ensure
                      better outcomes with comprehensive service, valuable
                      insights, and effective support for your case.
                    </p>
                    <ul className="list-wrap">
                      <li>
                        <img src={CHECK_ICON} alt="Check Icon" />
                        100% Better Results
                      </li>
                      <li>
                        <img src={CHECK_ICON} alt="Check Icon" />
                        Valuable Insights
                      </li>
                      <li>
                        <img src={CHECK_ICON} alt="Check Icon" />
                        Budget-Friendly Options
                      </li>
                      <li>
                        <img src={CHECK_ICON} alt="Check Icon" />
                        Satisfied Clients
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-44">
                  <div className="thumb">
                    <img src={SD_VIDEO_IMG} alt="Video Thumbnail" />
                    <VideoPlayerOne
                      src={"https://www.youtube.com/watch?v=6mkoGSqTqFI"}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p>
              Our unique approach combines migration expertise and valuable
              partnerships to address every aspect of your migration journey,
              ensuring seamless transitions and compliance at each stage.
            </p>
            <div className="company-benefit-wrap">
              <h2 className="title-two">Key Benefits of Our Services</h2>
              <p>
                Working with 482186 gives you access to a skilled team with over
                35 years of migration experience, ensuring you are well-prepared
                to navigate the Australian migration system with confidence.
              </p>

              {/* faq accordion */}
              <ServicesDetailsFaq />
            </div>
          </div>
        </div>
      </ServicesDetailsWrapper>

      {/* brand-area */}
      <BrandSeven />
    </Layout>
  );
};

export default ServicesDetailsPage;
