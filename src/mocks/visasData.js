// visasData.js

import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { SERVICES_IMG01, SERVICES_IMG02, SERVICES_IMG03 } from "../lib/assets"; // Adjust the relative path as necessary

export const visasData = [
  {
    id: 1,
    icon: faPassport, // FontAwesome icon
    href: "/482-visa",
    src: SERVICES_IMG01,
    title: "TSS 482 Visa",
    subtitle: "Book a one-on-one video consultation with migration experts.",
  },
  {
    id: 2,
    icon: faPassport, // FontAwesome icon
    href: "/186-visa",
    src: SERVICES_IMG02,
    title: "TSS 186 Visa",
    subtitle: "Get assistance with your skill assessment application.",
  },
  {
    id: 3,
    icon: faPassport, // FontAwesome icon
    href: "/482-vs-186",
    src: SERVICES_IMG03,
    title: "482 vs 186 Visa",
    subtitle:
      "Understand the key differences between TSS 482 and 186 visas with expert insights.",
  },
  // {
  //   id: 4,
  //   icon: faPassport, // FontAwesome icon
  //   href: "/business-visa",
  //   src: SERVICES_IMG01,
  //   title: "Business Visa",
  //   subtitle: "Comprehensive support for business visa applicants.",
  // },
  // {
  //   id: 5,
  //   icon: faPassport, // FontAwesome icon
  //   href: "/permanent-residency",
  //   src: SERVICES_IMG02,
  //   title: "Permanent Residency",
  //   subtitle: "Assistance for those seeking permanent residency options.",
  // },
  // {
  //   id: 6,
  //   icon: faPassport, // FontAwesome icon
  //   href: "/visitor-visa",
  //   src: SERVICES_IMG03,
  //   title: "Visitor Visa",
  //   subtitle: "Help with short-term visa applications for visitors.",
  // },
];
