import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const NavMenus = () => {
  const { pathname } = useLocation();

  const isActiveCn = (path) => {
    return path === pathname ? "active" : "";
  };

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        {/* Homepage */}
        <li className={cn(isActiveCn("/"))}>
          <Link to="/">Home</Link>
        </li>

        {/* About Us */}
        <li className={cn(isActiveCn("/about"))}>
          <Link to="/about">About Us</Link>
        </li>

        {/* Visa */}
        <li
          className={cn("menu-item-has-children", {
            active: ["/482-visa", "/186-visa"].includes(pathname),
          })}
        >
          <a href="#">Visa</a>
          <ul className="sub-menu">
            <li className={cn(isActiveCn("/482-visa"))}>
              <Link to="/visas">482 Visa</Link>
            </li>
            <li className={cn(isActiveCn("/186-visa"))}>
              <Link to="/visas">186 Visa</Link>
            </li>
          </ul>
        </li>

        {/* Blog */}
        <li
          className={cn("menu-item-has-children", {
            active: ["/blog", "/blog-details"].includes(pathname),
          })}
        >
          <a href="#">Blog</a>
          <ul className="sub-menu">
            <li className={cn(isActiveCn("/blog"))}>
              <Link to="/blog">Our Blog</Link>
            </li>
            <li className={cn(isActiveCn("/blog-details"))}>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>

        {/* Services */}
        <li
          className={cn("menu-item-has-children", {
            active: ["/services-details", "/services-details"].includes(
              pathname
            ),
          })}
        >
          <a href="#">Services</a>
          <ul className="sub-menu">
            <li className={cn(isActiveCn("/services-details"))}>
              <Link to="/services">Book Video Consultation</Link>
            </li>
            <li className={cn(isActiveCn("/services-details-2"))}>
              <Link to="/services">Skills Assessment</Link>
            </li>
            <li className={cn(isActiveCn("/downloads"))}>
              <Link to="/downloads">Downloads</Link>
            </li>
          </ul>
        </li>

        {/* Contact Us */}
        <li className={cn(isActiveCn("/contact"))}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
