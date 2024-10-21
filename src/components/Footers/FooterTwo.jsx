import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../../lib/assets";

export const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two footer-bg-two">
        <div className="footer-top-two">
          <div className="container">
            <div className="row">
              {/* Company Information Section */}
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <div className="fw-logo">
                    <Link to="/">
                      <div className="custom-logo-text">
                        <span className="main-text">482-186</span>
                        <span className="sub-text">Work Visa Expert</span>
                      </div>
                    </Link>
                  </div>

                  <div className="footer-content">
                    <p>
                      We offer expert business consulting services designed to
                      elevate your business to new heights. With our tailored
                      strategies, success is always within reach.
                    </p>
                    <div className="footer-info">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="content">
                            <a href="tel:0123456789">+123 456 7890</a>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-clock"></i>
                          </div>
                          <div className="content">
                            <p>
                              Mon – Fri: 9 am – 6 pm, <br />
                              Saturday: 10 am – 2 pm, <br />
                              Sunday: <span>CLOSED</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Section */}
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Company</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link to="/media">Press & Media</Link>
                      </li>
                      <li>
                        <Link to="/blog">Our Blog</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Quick Links</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/services">Our Services</Link>
                      </li>
                      <li>
                        <Link to="/partners">Partners</Link>
                      </li>
                      <li>
                        <Link to="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/case-studies">Case Studies</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Subscribe to Our Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Get the latest updates and insights from our experts,
                      straight to your inbox. Sign up for our newsletter today.
                    </p>
                    <form action="#">
                      <input type="email" placeholder="Enter your e-mail" />
                      <button type="submit">Subscribe</button>
                    </form>
                    <div className="footer-social footer-social-two">
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text-two text-center">
                  <p>
                    &copy; {new Date().getFullYear()} Aussie Education | All
                    Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
