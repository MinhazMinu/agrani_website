import {
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Handshake,
  Headphones,
  HeartHandshake,
  Layers3,
  Lightbulb,
  Lock,
  MonitorCog,
  Network,
  ShieldCheck,
  Trophy,
  Users,
  Workflow,
  Wrench,
  BrainCircuit,
  Landmark,
  Plane,
  BusFront,
  Bot,
  Headset,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const company = {
  name: "Agrani Technologies & Services Limited",
  shortName: "Agrani Technologies",
  email: "info@agranitechbd.com",
  phone: "+880-9610944449",
  website: "www.agranitechbd.com",
  address: "Plot-174/176, Road-02, Avenue-01, Mirpur DOHS, Dhaka-1216, Bangladesh",
  founded: "2013",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "10+", label: "Years in Operation" },
  { value: "100+", label: "Professionals" },
  { value: "4", label: "Sectors Served" },
  { value: "Nationwide", label: "Reach" },
];

export const sectors = [
  { label: "Government", icon: Building2 },
  { label: "Private Sector", icon: BriefcaseBusiness },
  { label: "NGOs", icon: HeartHandshake },
  { label: "Education", icon: GraduationCap },
];

export const services: IconItem[] = [
  {
    title: "Software Development",
    description:
      "Custom web and mobile applications, ERP systems, e-commerce platforms, and business systems tailored to specific organizational needs.",
    icon: Code2,
  },
  {
    title: "IT Consultancy",
    description:
      "Technology roadmaps, digital transformation planning, feasibility studies, audits, and optimization for stronger performance.",
    icon: Lightbulb,
  },
  {
    title: "System Integration",
    description:
      "Unified ecosystems that connect existing platforms, infrastructure, and workflows to reduce friction and improve efficiency.",
    icon: Network,
  },
  {
    title: "Cloud & Infrastructure Services",
    description:
      "Migration, management, and optimization across AWS, Azure, Google Cloud, private cloud, networks, servers, and virtualization.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Network security, vulnerability assessment, data encryption, secure backup, incident response, and recovery planning.",
    icon: ShieldCheck,
  },
  {
    title: "Managed IT Services",
    description:
      "Remote and on-site support, critical infrastructure maintenance, monitoring, and SLA-based helpdesk services.",
    icon: Headphones,
  },
  {
    title: "E-Governance Solutions",
    description:
      "Citizen service portals, document management, workflow automation, and MIS platforms for government agencies and ministries.",
    icon: Workflow,
  },
];

export const serviceDetails = [
  {
    title: "Software Development",
    icon: Code2,
    items: [
      "Custom Web & Mobile Application Development",
      "Enterprise Resource Planning (ERP) Systems",
      "Human Resource Management Systems (HRMS)",
      "Learning Management Systems (LMS)",
      "E-commerce Platforms",
      "Payment Integration Solutions",
    ],
  },
  {
    title: "IT/Technology Consultancy",
    icon: BrainCircuit,
    items: [
      "Strategic IT Roadmaps",
      "Digital Transformation Planning",
      "Technology Feasibility Studies",
      "System Audit & Optimization",
    ],
  },
  {
    title: "System Integration & Interoperability",
    icon: Landmark,
    items: [
      "End-to-End Systems Integration",
      "Interoperability Solutions for Government & Corporates",
      "Infrastructure Setup & Configuration",
      "API Gateway",
      "Data Exchange Hub",
      "Master Data Management",
      "Real-time Inter-agency Sharing",
    ],
  },
  {
    title: "Cloud & Infrastructure Services",
    icon: Cloud,
    items: [
      "Cloud Migration (AWS, Azure, Google Cloud)",
      "Private and Public Cloud Setup",
      "Server and Network Management",
      "Virtualization Solutions",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    icon: ShieldCheck,
    items: [
      "Network Security Architecture",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Data Encryption and Secure Backup",
      "Incident Response and Recovery",
    ],
  },
  {
    title: "Managed IT Services",
    icon: Headset,
    items: [
      "Remote and On-site Technical Support",
      "Maintenance of Critical IT Infrastructure",
      "SLA-based IT Helpdesk Services",
    ],
  },
  {
    title: "E-Governance Solutions",
    icon: Building2,
    items: [
      "Citizen Service Portals",
      "Emergency Response Systems",
      "Digital Document Management Systems",
      "Workflow Automation for Government Agencies",
      "MIS and Decision Support Systems for Ministries",
      "Single Sign-On for All Government Services",
    ],
  },
  {
    title: "AI-Powered Government Services",
    icon: Bot,
    items: [
      "AI Chatbots for Citizen Services",
      "AI-based Grievance Management",
      "Document Processing",
      "Permit and License Approvals",
      "Predictive Analytics for Policy Decisions",
    ],
  },
  {
    title: "Smart Transportation Ecosystem",
    icon: BusFront,
    items: [
      "Integrated Mobility Platform",
      "Unified Ticketing",
      "Smart Parking",
      "Intelligent Traffic Management",
      "AI Traffic Prediction",
      "Electronic Toll Collection",
    ],
  },
  {
    title: "IT Training",
    icon: GraduationCap,
    items: [
      "Software Development & Engineering",
      "Cloud Computing & Infrastructure",
      "Cyber Security & Information Assurance",
      "Data Science, AI, & Advanced Analytics",
      "Networking & Systems Administration",
      "IT Service Management (ITSM) & Project Governance",
      "Database Administration (DBA) & Storage",
    ],
  },
  {
    title: "Technology Based Consultancy",
    icon: Cpu,
    items: [
        "Strategy & Governance IT Strategy & Digital Transformation",
        "Infrastructure & Cloud Services - Cloud Advisory & Migration",
        "Software & Product Engineering - Custom Software Development Consulting",
        "Data, Analytics, & Artificial Intelligence - Data Strategy & Governance",
        "Cybersecurity & Trust - Security Assessments & Penetration Testing",
        "Enterprise Business Applications - ERP Consulting for SAP, Oracle, Microsoft Dynamics, and CRM Consulting",
        "Specialized & Emerging Tech Consulting - IoT Consulting",
    ],
  },
];


export const values: IconItem[] = [
  {
    title: "Integrity",
    description: "We act with honesty and uphold the highest standards of professionalism.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description: "We embrace change and introduce next-generation technologies.",
    icon: Lightbulb,
  },
  {
    title: "Customer Centricity",
    description: "We listen, understand, and deliver solutions for real-world challenges.",
    icon: Handshake,
  },
  {
    title: "Excellence",
    description: "We pursue quality in everything we do, from code to customer service.",
    icon: Trophy,
  },
  {
    title: "Teamwork",
    description: "We collaborate internally and externally to achieve common goals.",
    icon: Users,
  },
];

export const team = [
  {
    name: "Kamrul Islam",
    role: "Managing Director",
    experience: "25+ yrs experience",
    bio: "Kamrul Islam is the Managing Director of Agrani Technologies and Services Limited, bringing over 25 years of extensive experience in the IT sector both in Bangladesh and internationally. Under his leadership, the company continues to grow as a trusted name in delivering innovative technology solutions.",
  },
  {
    name: "Tanvir Mosaddaque",
    role: "Executive Director",
    experience: "25+ yrs experience",
    bio: "Tanvir Mosaddaque serves as the Executive Director of Agrani Technologies and Services Limited, bringing over 25 years of extensive experience in the IT sector both in Bangladesh and internationally. His strategic leadership plays a key role in sustainable growth and digital excellence.",
  },
  {
    name: "Hassan Shahid Sarwar FCA",
    role: "Finance Director",
    experience: "28+ yrs experience",
    bio: "Hassan Shahid Sarwar FCA is the Finance Director of Agrani Technologies and Services Limited, bringing over 28 years of extensive experience in accounts and finance both in Bangladesh and internationally. He guides fiscal operations, compliance, and sustainable growth.",
  },
];

export const teamRoles = [
  "Software Engineers",
  "System/Solution Architects",
  "Database Experts",
  "UI/UX Designers",
  "Software QA Experts/Software Testing Engineer",
  "Network & Security Experts",
  "Business Analysts",
  "Project Managers",
  "Support Engineers/Technicians"
];

export const technologyGroups = [
  { title: "Languages", icon: Code2, items: ["Java", "Python", "PHP", "JavaScript", ".NET"] },
  { title: "Frameworks", icon: Layers3, items: ["Laravel", "Spring Boot", "Angular", "Django", "CodeIgniter"] },
  { title: "Databases", icon: Database, items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
  { title: "Cloud", icon: Cloud, items: ["AWS", "Azure", "GCP"] },
  { title: "DevOps", icon: MonitorCog, items: ["Docker", "Jenkins", "Git", "Kubernetes"] },
  { title: "Security", icon: Lock, items: ["SSL", "OAuth", "Firewalls", "Pen Testing"] },
  { title: "Others", icon: Cpu, items: ["REST APIs", "Microservices", "AI/ML (basic)", "MVC Architecture"] },
];

export const infrastructure: IconItem[] = [
  {
    title: "Prime Dhaka Headquarters",
    description: "Headquarter located in a prime location of the capital.",
    icon: Building2,
  },
  {
    title: "Secure Labs & Server Rooms",
    description: "Secure development labs and server rooms for controlled delivery environments.",
    icon: Wrench,
  },
  {
    title: "Support & Training Center",
    description: "Comprehensive customer support and training facilities.",
    icon: GraduationCap,
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring and IT infrastructure management systems.",
    icon: MonitorCog,
  },
];

export const quality = [
  "ISO 9001:2015 (Quality Management System - In Process)",
  "ISO 27001:2022 (Information Security Management - Planned)",
  "Agile & DevOps-based development methodology",
];

export const csr = [
  "Offering free digital literacy programs",
  "Supporting educational institutions with technology tools",
  "Participating in national ICT policy advocacy",
  "Sponsoring coding bootcamps and hackathons for youth",
];
