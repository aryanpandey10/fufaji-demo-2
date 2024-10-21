import {
  H2_SERVICES_IMG01,
  H2_SERVICES_IMG02,
  H2_SERVICES_IMG03,
  H2_SERVICES_IMG04,
  H4_SERVICES_IMG01,
  H4_SERVICES_IMG02,
  H4_SERVICES_IMG03,
  H4_SERVICES_IMG04,
  SERVICES_IMG01,
  SERVICES_IMG02,
  SERVICES_IMG03,
  SERVICES_ITEM_SHAPE,
} from "../lib/assets";
import {
  faVideo,
  faClipboardCheck,
  faCalendar,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons"; // Import icons here
import {
  faCalendarAlt,
  faUserShield,
  faBriefcase,
  faPassport,
} from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons

export const SERVICES_TWO_LIST = [
  {
    id: 1,
    src: H2_SERVICES_IMG01,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: faVideo, // FontAwesome icon
    href: "/services-details",
    title: "Book a Video Consultation",
    subtitle: "Schedule a one-on-one consultation with our migration experts.",
  },
  {
    id: 2,
    src: H2_SERVICES_IMG02,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: faClipboardCheck, // FontAwesome icon
    href: "/services-details",
    title: "Skill Assessment Assistance",
    subtitle: "Get professional help with your skill assessment application.",
  },
  {
    id: 3,
    src: H2_SERVICES_IMG03,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: faCalendar, // FontAwesome icon
    href: "/services-details",
    title: "Visa Application Guidance",
    subtitle: "Expert guidance through every step of your visa application.",
  },
  {
    id: 4,
    src: H2_SERVICES_IMG04,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: faCheckSquare, // FontAwesome icon
    href: "/services-details",
    title: "Migration Plan Consultation",
    subtitle: "Create a customized migration plan based on your needs.",
  },
];

export const SERVICES_THREE_LIST = [
  {
    id: 1,
    src: H4_SERVICES_IMG01,
    icon: "flaticon-healthcare",
    href: "/services-details",
    title: "Health Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 2,
    src: H4_SERVICES_IMG02,
    icon: "flaticon-protection",
    href: "/services-details",
    title: "Vehicle Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 3,
    src: H4_SERVICES_IMG03,
    icon: "flaticon-ship",
    href: "/services-details",
    title: "Cargo Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 4,
    src: H4_SERVICES_IMG04,
    icon: "flaticon-house",
    href: "/services-details",
    title: "Fire Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
];

export const SERVICES_FOUR_LIST = [
  {
    id: 1,
    icon: "flaticon-business-presentation",
    href: "/services-details",
    title: "Marketing Strategy",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
  },
  {
    id: 2,
    icon: "flaticon-rocket",
    href: "/services-details",
    title: "SEO Consultancy",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
  },
  {
    id: 3,
    icon: "flaticon-mission",
    href: "/services-details",
    title: "Target Audience",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
  },
];

export const SERVICES_ONE_LIST = [
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
    href: "/services-details",
    src: SERVICES_IMG02,
    title: "Skill Assessment Assistance",
    subtitle: "Get assistance with your skill assessment application.",
  },
  {
    id: 3,
    icon: faCalendarAlt, // FontAwesome icon
    href: "/services-details",
    src: SERVICES_IMG03,
    title: "Visa Application Guidance",
    subtitle: "Guidance through each step of your visa application process.",
  },
  {
    id: 4,
    icon: faUserShield, // FontAwesome icon
    href: "/services-details",
    src: SERVICES_IMG01,
    title: "Visa Advisory (482 & 186)",
    subtitle: "Specialized advice on 482 and 186 visa options and pathways.",
  },
  {
    id: 5,
    icon: faBriefcase, // FontAwesome icon
    href: "/services-details",
    src: SERVICES_IMG02,
    title: "Business Visa Services",
    subtitle: "Tailored assistance for business visa applicants.",
  },
  {
    id: 6,
    icon: faPassport, // FontAwesome icon
    href: "/services-details",
    src: SERVICES_IMG03,
    title: "Permanent Residency Pathways",
    subtitle:
      "Consultation for those seeking permanent residency in Australia.",
  },
];
