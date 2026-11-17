// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update text, links,
// projects, skills or documents — the components read everything from it.
// ---------------------------------------------------------------------------

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaWordpress,
  FaLaravel,
  FaReact,
  FaHtml5,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaShoppingCart,
  FaMobileAlt,
  FaDatabase,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiNextdotjs, SiNestjs, SiPostgresql } from 'react-icons/si';

// Files in /public are served from the site root. Using a relative base keeps
// links working when the site is deployed to a sub-folder.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Muhammad Adeel Basit',
  shortName: 'Adeel',
  role: 'WordPress & Full Stack Developer',
  typedRoles: ['Frontend Developer', 'Backend Developer', 'WordPress Developer', 'Full Stack Web Developer'],
  intro:
    'I build fast, responsive and user-friendly websites — from pixel-perfect frontends to secure, scalable backends.',
  email: 'adeelbasit33@gmail.com',
  phone: '+923147968600',
  phoneDisplay: '+92 314 7968600',
  location: 'Pakistan',
  photo: asset('images/profile-photo.png'),
};

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1YULV46UYo/', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/adeel_web_dev?igsh=NTI4cHltMzVtZXo3', icon: FaInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/923147968600', icon: FaWhatsapp },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-adeel-basit-134644301',
    icon: FaLinkedinIn,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  title: 'WordPress & Full Stack Developer',
  paragraphs: [
    'I completed my BS in Computer Science from Khawaja Fareed University of Engineering and Information Technology with a CGPA of 3.4/4.0.',
    'As a WordPress and Full Stack (Laravel) developer, I create elegant, user-friendly websites and dynamic web applications. My work reflects a dedication to performance, security and an exceptional user experience.',
    "Let's connect and discuss how I can help bring your next project to life!",
  ],
  details: [
    { label: 'Degree', value: 'BS Computer Science' },
    { label: 'CGPA', value: '3.4 / 4.0' },
    { label: 'Location', value: 'Pakistan' },
    { label: 'Freelance', value: 'Available' },
  ],
};

export const services = [
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    text: 'Custom, high-quality and responsive WordPress websites — from concept to launch and ongoing optimisation, focused on performance and results.',
  },
  {
    icon: FaReact,
    title: 'Frontend Development',
    text: 'Fast, accessible and user-centric interfaces using HTML5, CSS3, modern JavaScript (ES6+) and React.js, with clean, responsive layouts.',
  },
  {
    icon: FaLaravel,
    title: 'Laravel Development',
    text: 'Secure, scalable backend solutions with Laravel — REST APIs, admin panels and business logic built with clean, maintainable code.',
  },
  {
    icon: FaDatabase,
    title: 'MERN Stack Apps',
    text: 'Full stack web applications with MongoDB, Express, React and Node.js — dashboards, POS systems and custom business tools.',
  },
  {
    icon: FaShoppingCart,
    title: 'E-commerce Solutions',
    text: 'Online stores with product management, carts and checkout flows that are easy to manage and built to convert visitors into customers.',
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    text: 'Every website looks and works great on mobiles, tablets, laptops and large screens — tested across devices and browsers.',
  },
];

export const technicalSkills = [
  { name: 'HTML & CSS', level: 90, icon: FaHtml5, color: '#e34f26' },
  { name: 'JavaScript', level: 80, icon: FaJs, color: '#f7df1e' },
  { name: 'React.js', level: 85, icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', level: 80, icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Express.js', level: 70, icon: SiExpress, color: '#ffffff' },
  { name: 'Nest.js', level: 70, icon: SiNestjs, color: '#e0234e' },
  { name: 'WordPress', level: 80, icon: FaWordpress, color: '#4fa3d8' },
];

export const professionalSkills = [
  { name: 'Creativity', level: 90 },
  { name: 'Communication', level: 70 },
  { name: 'Problem Solving', level: 80 },
  { name: 'Teamwork', level: 90 },
];

export const tools = [
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'Nest.js', icon: SiNestjs, color: '#e0234e' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'WordPress', icon: FaWordpress, color: '#4fa3d8' },
  { name: 'PHP', icon: FaPhp, color: '#8892bf' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
];

// category: 'wordpress' | 'webapp'
// link: live URL — caseStudy: PDF in /public/documents
// domain: shown in the browser-mockup address bar — accent: brand colour used for the thumbnail backdrop
// image is optional: if missing (or it fails to load) a branded placeholder thumbnail is generated.
export const projects = [
  {
    title: 'Apex Autodrome',
    category: 'wordpress',
    description: 'Go-karting and gaming arcade website with attractions, corporate events and booking enquiries.',
    tags: ['WordPress', 'Responsive', 'Entertainment'],
    image: asset('images/apex.jpg'),
    link: 'https://www.apexautodrome.com/',
    domain: 'apexautodrome.com',
    accent: '#e3262b',
  },
  {
    title: 'Maple Leaf',
    category: 'wordpress',
    description: 'Restaurant, bakery and coffee website with food menu, gallery and table reservations.',
    tags: ['WordPress', 'Restaurant', 'Responsive'],
    image: asset('images/maple.jpg'),
    link: 'https://mapleleafksa.com/',
    domain: 'mapleleafksa.com',
    accent: '#d61f26',
  },
  {
    title: 'Odi Custom',
    category: 'wordpress',
    description: 'French-language catalogue website for custom carbon-fibre steering wheels.',
    tags: ['WordPress', 'Catalogue', 'Multilingual'],
    image: asset('images/odic.jpg'),
    link: 'https://odicustom.com/',
    domain: 'odicustom.com',
    accent: '#ef4444',
  },
  {
    title: 'Golden Qilla',
    category: 'wordpress',
    description: 'Pakistani restaurant website with menus, catering services, gallery and location details.',
    tags: ['WordPress', 'Restaurant', 'Responsive'],
    image: asset('images/gq.jpg'),
    link: 'https://goldenqilla.com/',
    domain: 'goldenqilla.com',
    accent: '#f59e0b',
  },
  {
    title: 'Safrin SkinCare',
    category: 'wordpress',
    description: 'Skincare online store with product shop, deals and order tracking.',
    tags: ['WordPress', 'E-commerce', 'Responsive'],
    image: asset('images/skin.jpg'),
    link: 'https://safrinskincare.com.pk/',
    domain: 'safrinskincare.com.pk',
    accent: '#22a6d9',
  },
  {
    title: 'Ladies First Driving School',
    category: 'wordpress',
    description: 'UK driving school website with courses, test centres and student offers.',
    tags: ['WordPress', 'Education', 'Responsive'],
    image: asset('images/ladies.jpg'),
    link: 'https://ladiesfirstdrivingschool.co.uk/',
    domain: 'ladiesfirstdrivingschool.co.uk',
    accent: '#ff5fa2',
  },
  {
    title: 'Saremco',
    category: 'wordpress',
    description: 'Multilingual corporate website for an international trading company — forage, minerals and grains.',
    tags: ['WordPress', 'Corporate', 'Multilingual'],
    image: asset('images/saremco.jpg'),
    link: 'https://saremco.com.pk/',
    domain: 'saremco.com.pk',
    accent: '#eab308',
  },
  {
    title: 'Muslim Medical Mission',
    category: 'wordpress',
    description: 'Non-profit website with donations, volunteer sign-up, disaster services and blog.',
    tags: ['WordPress', 'Non-profit', 'Responsive'],
    image: asset('images/mmm.jpg'),
    link: 'https://mmm.org.pk/',
    domain: 'mmm.org.pk',
    accent: '#2563eb',
  },
  {
    title: 'Octoflyte Solution',
    category: 'wordpress',
    description: 'Business solutions agency website — IT, accounting, consulting and virtual assistance.',
    tags: ['WordPress', 'Agency', 'Responsive'],
    image: asset('images/octo.jpg'),
    link: 'https://dexenttech.rf.gd/',
    domain: 'dexenttech.rf.gd',
    accent: '#fb7185',
  },
  {
    title: "Celia's Haitian Products",
    category: 'wordpress',
    description: 'Online store for authentic handcrafted Haitian food and pantry products.',
    tags: ['WordPress', 'E-commerce', 'Responsive'],
    image: asset('images/celia.png'),
    domain: 'celias-haitian-products',
    accent: '#9f1d4a',
  },
  {
    title: 'S.U.P.P.O.R.T. Africa Group',
    category: 'wordpress',
    description: "Corporate and foundation website for an organisation accelerating Africa's economic and social growth.",
    tags: ['WordPress', 'Corporate', 'Foundation'],
    image: asset('images/support-africa.png'),
    domain: 'support-africa-group',
    accent: '#4f46e5',
  },
  {
    title: 'E-commerce Accessories Store',
    category: 'webapp',
    description: 'Full-featured store for mobile and laptop accessories with catalogue, categories, deals and cart.',
    tags: ['Web App', 'E-commerce', 'Admin Panel'],
    image: asset('images/ecom.jpeg'),
    caseStudy: asset('documents/ecommerce-case-study.pdf'),
    domain: 'accessories-store',
    accent: '#8b5cf6',
  },
  {
    title: 'Maple POS System',
    category: 'webapp',
    description: 'Multi-role point-of-sale system for super admins, business owners and staff — stores, products and orders.',
    tags: ['Web App', 'POS', 'Role-based Auth'],
    image: asset('images/pos.png'),
    caseStudy: asset('documents/pos-case-study.pdf'),
    domain: 'maple-pos',
    accent: '#22c55e',
  },
  {
    title: 'Maple Real Estate Platform',
    category: 'webapp',
    description: 'Property platform to buy, rent and search verified listings across major cities, with agent profiles.',
    tags: ['Web App', 'Real Estate', 'Search & Filters'],
    image: asset('images/realestate.png'),
    caseStudy: asset('documents/real-estate-case-study.pdf'),
    domain: 'maple-realestate',
    accent: '#0ea5e9',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'webapp', label: 'Web Apps' },
];

export const documents = [
  {
    title: 'Course Certificate',
    text: 'Website Development Course Certification',
    href: asset('documents/web-course-certificate.pdf'),
  },
  {
    title: 'Internship Certificate',
    text: 'Website Development Internship Certification',
    href: asset('documents/internship-certificate.pdf'),
  },
  {
    title: 'Experience Letter',
    text: 'Website Development Job Experience Letter',
    href: asset('documents/experience-letter.pdf'),
  },
  {
    title: 'MERN Stack Certificate',
    text: 'MongoDB, Express, React & Node.js Certification',
    href: asset('documents/mern-certificate.pdf'),
  },
];
