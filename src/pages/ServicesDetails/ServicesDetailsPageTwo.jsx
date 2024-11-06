import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { ServicesDetailsWrapper } from "../../components/ServicesDetails/ServicesDetailsWrapper";
import { BrandSeven } from "../../components/Brand/BrandSeven";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faDollarSign,
  faUser,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactUsOffCanvas.css";

const ServicesDetailsPageTwo = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiryFor: "",
    briefNote: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowOffcanvas(false);
  };

  return (
    <Layout breadcrumb="Services" title="Service Details">
      {/* services-details-area */}
      <ServicesDetailsWrapper>
        <div className="services-details-wrap">
          <div className="services-details-content">
            <h2 className="title">
              Skills Assessment Services for Migration and Employer-Sponsored
              Visas
            </h2>
            <p>
              Skills assessment is essential for various Australian visas,
              including employer-sponsored and General Skilled Migration (GSM)
              visas like 189, 190, and 491. Different assessment authorities
              handle various occupations for Australian migration.
            </p>

            {/* Tabs for Occupation Categories */}
            <Tabs>
              <TabList>
                <Tab>IT Occupations</Tab>
                <Tab>Engineering Occupations</Tab>
                <Tab>Trade Occupations</Tab>
                <Tab>General Occupations</Tab>
                <Tab>Nursing Occupations</Tab>
              </TabList>

              <TabPanel>
                <h3>Skills Assessment by ACS</h3>
                <p>
                  IT occupations are assessed by the Australian Computer Society
                  (ACS).
                </p>
              </TabPanel>

              <TabPanel>
                <h3>Skills Assessment by Engineers Australia</h3>
                <p>
                  Skills assessment for engineering occupations not under the
                  Washington Accord...
                </p>
              </TabPanel>

              <TabPanel>
                <h3>Skills Assessment for Trade Occupations</h3>
                <p>
                  Trade occupations are assessed by the relevant Australian
                  authorities.
                </p>
              </TabPanel>

              <TabPanel>
                <h3>Skills Assessment for General Occupations</h3>
                <p>
                  General occupations are assessed by different organizations
                  depending on the field.
                </p>
              </TabPanel>

              <TabPanel>
                <h3>Skills Assessment for Nursing Occupations</h3>
                <p>
                  Nursing occupations are assessed by the Australian Nursing and
                  Midwifery Council.
                </p>
              </TabPanel>
            </Tabs>

            <Button variant="primary" onClick={() => setShowOffcanvas(true)}>
              Contact Us
            </Button>

            {/* Offcanvas Contact Form */}
            <Offcanvas
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact Us</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FontAwesomeIcon icon={faUser} /> Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">
                      <FontAwesomeIcon icon={faPhone} /> Mobile No
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FontAwesomeIcon icon={faEnvelope} /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-submit">
                    Submit
                  </button>
                </form>
              </Offcanvas.Body>
            </Offcanvas>

            {/* Enhanced Tables Section */}
            <div className="assessment-tables">
              <h3>Assessment Types</h3>
              <table className="assessment-table">
                <thead>
                  <tr>
                    <th>
                      <FontAwesomeIcon icon={faFileAlt} /> Assessment Type
                    </th>
                    <th>Choose This When You</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Competency Demonstration Report</td>
                    <td>
                      Non-accredited qualifications, or accredited qualification
                      for a different occupation or Engineering Manager.
                    </td>
                  </tr>
                  <tr>
                    <td>Australian Qualification</td>
                    <td>
                      Australian qualifications accredited by Engineers
                      Australia.
                    </td>
                  </tr>
                  {/* Additional rows */}
                </tbody>
              </table>

              <h3>CDR Assessment Fees</h3>
              <table className="assessment-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>
                      <FontAwesomeIcon icon={faDollarSign} /> Fee Excl. GST
                      (AUD)
                    </th>
                    <th>Fee Incl. GST (AUD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Standard Competency Demonstration Report</td>
                    <td>$850</td>
                    <td>$935</td>
                  </tr>
                  {/* Additional rows */}
                </tbody>
              </table>
            </div>

            {/* Key Benefits Section */}
            <div className="company-benefit-wrap">
              <h2 className="title-two">Company Key Benefits</h2>
              <div className="benefits-blocks">
                <div className="benefit-item">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2x"
                    className="benefit-icon"
                  />
                  <h4>Personalized Guidance</h4>
                  <p>Receive expert advice from migration specialists.</p>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    size="2x"
                    className="benefit-icon"
                  />
                  <h4>Comprehensive Documentation</h4>
                  <p>
                    Get help with compiling and organizing necessary documents.
                  </p>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size="2x"
                    className="benefit-icon"
                  />
                  <h4>Affordable Fees</h4>
                  <p>Competitive pricing for quality services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServicesDetailsWrapper>

      {/* brand-area */}
      <BrandSeven />
    </Layout>
  );
};

export default ServicesDetailsPageTwo;
