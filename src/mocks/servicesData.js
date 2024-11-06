import {
  faVideo,
  faClipboardCheck,
  faCalendarAlt,
  faUserShield,
  faBriefcase,
  faPassport,
  faPhone,
  faLaptop,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"; // Adjust FontAwesome import path as necessary

import {
  SERVICES_IMG01,
  SERVICES_IMG02,
  SERVICES_IMG03,
} from "../lib/assets.js"; // Adjust relative path for images

export const services = [
  {
    id: 1,
    icon: faVideo, // FontAwesome icon
    href: "/services-details",
    src: SERVICES_IMG01,
    title: "Video Consultation",
    subtitle: "Book a one-on-one video consultation with migration experts.",
  },
  {
    id: 2,
    icon: faClipboardCheck, // FontAwesome icon
    href: "/services-details-2",
    src: SERVICES_IMG02,
    title: "Skill Assessment Assistance",
    subtitle: "Get assistance with your skill assessment application.",
  },
  {
    id: 3,
    icon: faCalendarAlt, // FontAwesome icon
    href: "/services-details-3",
    src: SERVICES_IMG03,
    title: "Visa Application Guidance",
    subtitle: "Guidance through each step of your visa application process.",
  },
  {
    id: 4,
    icon: faUserShield, // FontAwesome icon
    href: "/services-details-4",
    src: SERVICES_IMG01,
    title: "Visa Advisory (482 & 186)",
    subtitle: "Specialized advice on 482 and 186 visa options and pathways.",
  },
  {
    id: 5,
    icon: faBriefcase, // FontAwesome icon
    href: "/services-details-5",
    src: SERVICES_IMG02,
    title: "Business Visa Services",
    subtitle: "Tailored assistance for business visa applicants.",
  },
  {
    id: 6,
    icon: faPassport, // FontAwesome icon
    href: "/services-details-6",
    src: SERVICES_IMG03,
    title: "Permanent Residency Pathways",
    subtitle:
      "Consultation for those seeking permanent residency in Australia.",
  },
  {
    id: 7,
    icon: faPhone,
    href: "/services-details-7",
    src: SERVICES_IMG01,
    title: "Phone Consultation",
    subtitle: "Book a phone consultation with our experts.",
  },
  {
    id: 8,
    icon: faLaptop,
    href: "/services-details-8",
    src: SERVICES_IMG02,
    title: "Online Counseling",
    subtitle: "Get counseling sessions online from our professionals.",
  },
  {
    id: 9,
    icon: faUsers,
    href: "/services-details-9",
    src: SERVICES_IMG03,
    title: "Group Sessions",
    subtitle: "Join group sessions tailored to your needs.",
  },
  // Add more services as needed
];
