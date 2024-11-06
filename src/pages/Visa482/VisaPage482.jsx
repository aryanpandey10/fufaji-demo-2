import React from "react";
import { Layout } from "../../layouts/Layout";
import { SERVICES_DETAILS03 } from "../../lib/assets";
import { VisaDetailsWrapper } from "../../components/Visa/VisaDetailsWrapper";
import { BrandSeven } from "../../components/Brand/BrandSeven";
import "./VisaDetails.css"; // Import the CSS here

const VisaPage482 = () => {
  return (
    <Layout breadcrumb={"Visa"} title={"TSS 482 Visa Information"}>
      <VisaDetailsWrapper>
        <div class="services-details-wrap">
          <div class="services-details-thumb">
            <img src={SERVICES_DETAILS03} alt="TSS 482 Visa Information" />
          </div>
          <div class="services-details-content">
            <h2 class="title">
              Temporary Skill Shortage (TSS) 482 Visa Overview
            </h2>
            <p>
              The TSS 482 Visa allows an employer to sponsor skilled workers
              from overseas when they cannot find a skilled Australian to fill a
              position. Here’s a breakdown of the process and requirements for
              applicants and employers.
            </p>

            <h3>Application Process:</h3>
            <ul>
              <li>
                <strong>Step 1: Sponsorship Application</strong> – Employers
                apply to become a Standard Business Sponsor (SBS), demonstrating
                their business operates lawfully and follows labor practices.
              </li>
              <li>
                <strong>Step 2: Nomination Application</strong> – Employers
                submit a nomination detailing the position, salary, and efforts
                to recruit locally.
              </li>
              <li>
                <strong>Step 3: Visa Application</strong> – The nominated
                employee applies, meeting skill, health, and character
                requirements.
              </li>
            </ul>

            <h3>Available Streams:</h3>
            <ul>
              <li>
                <strong>Short-term Stream</strong> – For temporary skilled
                workers, up to 2 years (4 years if international trade
                obligations apply).
              </li>
              <li>
                <strong>Medium-term Stream</strong> – For critical skills, up to
                4 years, with eligibility for permanent residency.
              </li>
              <li>
                <strong>Labour Agreement Stream</strong> – For workers under a
                labor agreement with potential for permanent residency.
              </li>
            </ul>

            <h3>Requirements for the Employee:</h3>
            <ul>
              <li>Work experience relevant to the nominated position.</li>
              <li>IELTS score of 5 (no skill below 4.5), unless exempt.</li>
              <li>Health and character requirements.</li>
            </ul>

            <h3>Employer Obligations:</h3>
            <ul>
              <li>
                Meet salary level requirements, above the TSMIT threshold.
              </li>
              <li>Pay the SAF Levy based on annual turnover.</li>
              <li>
                Conduct Labour Market Testing (LMT) before hiring overseas
                talent.
              </li>
            </ul>

            <h3>Checklist for the Employee:</h3>
            <ul>
              <li>
                Identity documents, police certificates, marriage certificate if
                applicable.
              </li>
              <li>
                Evidence of skills and experience, including pay slips and
                employer references.
              </li>
              <li>Up-to-date LinkedIn profile showing full work history.</li>
            </ul>

            <h3>Checklist for the Employer:</h3>
            <ul>
              <li>ABN Registration Certificate and Business Names Extract.</li>
              <li>
                Financial reports, BAS statements, and evidence of business
                viability.
              </li>
              <li>
                Evidence of position necessity aligned with ANZSCO occupation
                descriptions.
              </li>
            </ul>

            <div class="final-paragraph">
              <p>
                For detailed assistance, contact our agency. Charges for the
                SBS, Nomination, and Visa process are $6000.00 + GST.
              </p>
            </div>
          </div>
        </div>
      </VisaDetailsWrapper>
      <BrandSeven />
    </Layout>
  );
};

export default VisaPage482;
