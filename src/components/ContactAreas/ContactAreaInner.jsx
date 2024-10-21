import React, { useState } from "react";

export const ContactAreaInner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with actual form submission logic
  };

  return (
    <section className="inner-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-start">
          {/* Contact Form Section */}
          <div className="col-lg-6 mb-5">
            <h2 className="title mb-4 text-primary font-weight-bold">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group mb-3">
                <label htmlFor="name" className="font-weight-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="mobile" className="font-weight-medium">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="font-weight-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div
                className={`form-group mb-3 dropdown ${
                  isDropdownOpen ? "open" : ""
                }`}
              >
                <label htmlFor="enquiry" className="font-weight-medium">
                  Enquiring For
                </label>
                <div className="dropdown-wrapper" onClick={handleDropdownClick}>
                  <select
                    className="form-control"
                    id="enquiry"
                    name="enquiry"
                    required
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <option value="482 Visa">482 Visa</option>
                    <option value="186 Visa">186 Visa</option>
                    <option value="Skills Assessment">Skills Assessment</option>
                    <option value="Refusal / Cancellation">
                      Refusal / Cancellation
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message" className="font-weight-medium">
                  Brief Note about Your Enquiry
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>

          {/* Office Address Section */}
          <div className="col-lg-6">
            <h2 className="title mb-4 text-primary font-weight-bold">
              Our Office Address
            </h2>
            <div className="contact-info-item mb-4">
              <h5 className="title-two mb-2">USA Office</h5>
              <ul className="list-unstyled">
                <li>
                  100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                </li>
                <li>+1 (310) 620-8565</li>
                <li>info@gmail.com</li>
              </ul>
            </div>
            <div className="contact-info-item">
              <h5 className="title-two mb-2">Australia Office</h5>
              <ul className="list-unstyled">
                <li>
                  100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                </li>
                <li>+1 (310) 620-8565</li>
                <li>info@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
