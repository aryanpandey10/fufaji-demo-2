import React from "react";
import { Layout } from "../../layouts/Layout";
import { VisaDetailsWrapper } from "../../components/Visa/VisaDetailsWrapper";
import "./Difference482vs186.css"; // Assuming you want to add specific styles

const Difference482vs186 = () => {
  return (
    <Layout
      breadcrumb={"Visa"}
      title={"Difference Between TSS 482 Visa and SC 186 Visa"}
    >
      <VisaDetailsWrapper>
        <div className="difference-table-wrap">
          <table className="difference-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>TSS 482 Visa (Temporary Skill Shortage)</th>
                <th>SC 186 Visa (Employer Nomination Scheme)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purpose</td>
                <td>
                  Allows employers to temporarily sponsor skilled overseas
                  workers for positions they cannot fill locally.
                </td>
                <td>
                  Permanent visa for skilled workers nominated by an Australian
                  employer.
                </td>
              </tr>
              <tr>
                <td>Streams Available</td>
                <td>
                  - Short-term: Up to 2 years (4 years for international trade
                  obligations). <br />- Medium-term: Up to 4 years, with
                  potential PR pathway. <br />- Labour Agreement: Based on
                  specific agreements, with possible PR pathway.
                </td>
                <td>
                  - Direct Entry: For workers with 3+ years of relevant
                  experience and Competent English. <br />- Labour Agreement:
                  Requires an agreement with the government. <br />- Temporary
                  Residence Transition: For those holding a 457, TSS, or
                  bridging visa.
                </td>
              </tr>
              <tr>
                <td>Employer Requirements</td>
                <td>
                  Sponsorship approval as a Standard Business Sponsor. Must meet
                  local labor and employment standards. Labour Market Testing
                  (LMT) required.
                </td>
                <td>
                  Employer must be an approved sponsor and nominate a position
                  on the MLTSSL.
                </td>
              </tr>
              <tr>
                <td>Pathway to Permanent Residency (PR)</td>
                <td>
                  Possible in the Medium-term and Labour Agreement streams after
                  3 years.
                </td>
                <td>
                  Direct PR pathway, allowing for permanent residency upon visa
                  grant.
                </td>
              </tr>
              <tr>
                <td>Visa Duration</td>
                <td>
                  - Short-term: Up to 2 years (renewable once onshore, more if
                  offshore). <br />- Medium-term & Labour Agreement: Up to 4
                  years (renewable).
                </td>
                <td>Permanent; allows indefinite stay in Australia.</td>
              </tr>
              <tr>
                <td>Skill & Experience Requirements</td>
                <td>
                  At least 1-2 years of relevant work experience. Must meet
                  ANZSCO skill level requirements.
                </td>
                <td>
                  3+ years of full-time work experience for Direct Entry.
                  Competent English level for Direct Entry.
                </td>
              </tr>
              <tr>
                <td>English Language Requirement</td>
                <td>
                  Short-term: IELTS 5 overall (no skill below 4.5). Medium-term:
                  IELTS 5 (no skill below 5).
                </td>
                <td>
                  Competent English (IELTS 6 or equivalent) for Direct Entry.
                </td>
              </tr>
              <tr>
                <td>Visa Conditions</td>
                <td>
                  Must meet Condition 8607 for occupation changes. Demonstrate
                  intention to stay temporarily for Short-term stream.
                </td>
                <td>
                  No specific conditions on occupation change; allows permanent
                  settlement.
                </td>
              </tr>
              <tr>
                <td>Employer Costs (SAF Levy)</td>
                <td>
                  $1,200 (businesses with &lt;$10M turnover) or $1,800
                  (businesses with ≥$10M turnover) annually per sponsored
                  employee.
                </td>
                <td>
                  Costs may vary, but no ongoing SAF Levy post-sponsorship.
                </td>
              </tr>
              <tr>
                <td>Salary Requirements</td>
                <td>
                  Must meet the Australian Market Salary Rate (AMSR) and the
                  TSMIT ($73,150 from 1 July 2024).
                </td>
                <td>Must meet market salary rates for nominated position.</td>
              </tr>
              <tr>
                <td>Benefits for Visa Holders</td>
                <td>
                  Work in Australia temporarily. Possible pathway to PR in
                  specific streams. Can include family members.
                </td>
                <td>
                  Permanent residency, access to Medicare, opportunity for
                  citizenship, can sponsor eligible relatives.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </VisaDetailsWrapper>
    </Layout>
  );
};

export default Difference482vs186;
