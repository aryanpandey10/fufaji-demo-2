import React from "react";

export const ServicesDetailsFaq = () => {
  return (
    <div className="accordion-wrap-three">
      <div className="accordion" id="accordionExample">
        {/* FAQ Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the 482 Visa, and who is eligible?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                The 482 Visa, also known as the Temporary Skill Shortage (TSS)
                Visa, allows Australian businesses to hire overseas workers to
                fill skill shortages. Eligibility requirements include specific
                skills, English proficiency, and a minimum of one year of work
                experience in the field.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What is the 186 Visa, and what are its benefits?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                The 186 Visa, or Employer Nomination Scheme (ENS) Visa, provides
                permanent residency for skilled workers nominated by an
                Australian employer. It offers benefits such as permanent
                residency, the right to work in Australia indefinitely, and
                access to Australian healthcare and education services.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is a skills assessment, and how does it impact my visa
              application?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                A skills assessment is a process used by Australian assessing
                authorities to evaluate your qualifications and experience
                against Australian standards. This is essential for certain
                visas, such as the 482 and 186, to confirm you meet the skills
                required for your occupation.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How can I book a video consultation?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                You can book a video consultation through our website. Simply
                provide your contact details, select an available time slot from
                Monday to Friday, and complete the payment process. Our team
                will reach out to confirm the booking and provide details for
                the consultation.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What documents are required for a 482 or 186 Visa application?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Required documents vary depending on the specific visa subclass
                but generally include identification, work experience
                certificates, proof of skills assessment, English proficiency
                scores, and nomination from an Australian employer. Please refer
                to our document checklist page for more detailed information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
