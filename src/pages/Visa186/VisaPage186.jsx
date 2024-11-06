import React from "react";
import { Layout } from "../../layouts/Layout";
import { SERVICES_DETAILS03 } from "../../lib/assets";
import { VisaDetailsWrapper } from "../../components/Visa/VisaDetailsWrapper";
import { BrandSeven } from "../../components/Brand/BrandSeven";
import "./VisaDetails.css"; // Import the CSS here

const VisaPage186 = () => {
  return (
    <Layout
      breadcrumb={"Visa"}
      title={"SC 186 Visa - Employer Nomination Scheme Visa"}
    >
      <VisaDetailsWrapper>
        <div className="services-details-wrap">
          <div className="services-details-thumb">
            <img src={SERVICES_DETAILS03} alt="SC 186 Visa Information" />
          </div>
          <div className="services-details-content">
            <h2 className="title">
              SC 186 Visa - Employer Nomination Scheme Visa Overview
            </h2>
            <p>
              The 186 Visa allows skilled workers to live and work in Australia
              permanently. Here’s an overview of the streams and requirements:
            </p>

            <h3>Available Streams:</h3>
            <ul>
              <li>
                <strong>Direct Entry stream</strong> – Requires 3 years of
                full-time experience in your occupation, nomination by an
                Australian employer, and Competent English.
              </li>
              <li>
                <strong>Labour Agreement stream</strong> – Requires a labor
                agreement with the employer.
              </li>
              <li>
                <strong>Temporary Residence Transition stream</strong> – For
                those holding a 457, TSS, or a bridging visa A, B, or C, with at
                least two years of work with the same employer.
              </li>
            </ul>

            <h3>Benefits of the 186 Visa:</h3>
            <ul>
              <li>Stay in Australia indefinitely.</li>
              <li>Work and study in Australia.</li>
              <li>
                Enroll in Medicare, Australia’s public health care scheme.
              </li>
              <li>Sponsor eligible relatives to come to Australia.</li>
              <li>Travel to and from Australia for 5 years.</li>
              <li>Apply for Australian citizenship, if eligible.</li>
            </ul>

            <h3>Direct Entry Process:</h3>
            <ul>
              <li>
                <strong>Employer Nomination</strong> – The employer nominates
                you for a role within the eligible Medium and Long-term
                Strategic Skills List (MLTSSL). Check eligible occupations{" "}
                <a
                  href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </li>
              <li>
                <strong>Eligibility Check</strong> – Includes skills assessment,
                relevant work experience, and English proficiency.
              </li>
              <li>
                <strong>Visa Application</strong> – Once nominated, apply for
                the 186 visa with required documents and undergo health and
                character checks.
              </li>
            </ul>

            <h3>Fees and Charges:</h3>
            <ul>
              <li>
                <strong>Visa Application Charge (VAC):</strong> AUD 4,770 for
                the primary applicant.
              </li>
              <li>
                <strong>Nomination Charge:</strong> Approx. AUD 540 for
                employers.{" "}
                <a
                  href="https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More details
                </a>
                .
              </li>
              <li>
                <strong>SAF Levy:</strong> Skilling Australians Fund (SAF) levy
                is required for ENS 186 visas.
              </li>
              <li>
                <strong>Health and Skills Assessment Fees:</strong> Costs vary
                based on medical exams and assessing authorities.
              </li>
              <li>
                <strong>Second Instalment:</strong> AUD 4,890 for family members
                over 18 who do not have Functional English.
              </li>
            </ul>

            <h3>Meeting Age Criteria:</h3>
            <p>
              You must usually be under 45 years of age when applying.
              Exemptions are available for certain academic and scientific roles
              or specific visa holders.
            </p>

            <h3>Document Checklist for Employers:</h3>
            <ul>
              <li>ABN certificate, financial statements, and BAS reports.</li>
              <li>
                Letter from an accountant confirming financial viability to
                hire.
              </li>
              <li>
                Evidence of need for the nominated position (contracts, business
                growth indicators).
              </li>
              <li>Employment contract and job description for the nominee.</li>
              <li>
                Organizational chart showing all employees with roles and visa
                statuses.
              </li>
            </ul>

            <h3>Document Checklist for Applicants:</h3>
            <ul>
              <li>Passport and identity documents.</li>
              <li>Marriage certificate, if applicable.</li>
              <li>Skills assessment, work references, and qualifications.</li>
              <li>Proof of English language ability.</li>
              <li>Certificates for all formal qualifications.</li>
              <li>
                Australian Federal Police (AFP) National Police Certificate if
                you have lived in Australia for more than 12 months in the past
                10 years.
              </li>
            </ul>

            <div className="final-paragraph">
              <p>
                For assistance with the SC 186 visa application, please contact
                our agency. Charges vary based on services and application
                specifics.
              </p>
            </div>
          </div>
        </div>
      </VisaDetailsWrapper>
      <BrandSeven />
    </Layout>
  );
};

export default VisaPage186;
