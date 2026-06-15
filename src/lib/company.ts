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
    title: "Technology Consultancy",
    icon: Lightbulb,
    items: [
      "Strategic Technology Roadmap Development",
      "Digital Transformation Strategy",
      "Technology Feasibility and Readiness Assessment",
      "Enterprise Architecture Consulting",
      "IT Governance and Policy Development",
      "Business Process Analysis and Optimization",
    ],
  },
  {
    title: "AI-Powered Government Services",
    icon: BrainCircuit,
    items: [
      "AI-powered Citizen Service Portals",
      "Intelligent Chatbots and Virtual Assistants",
      "Automated Document Processing and Classification",
      "Predictive Analytics for Public Service Planning",
      "AI-based Fraud and Anomaly Detection",
      "Decision Support Systems for Government Agencies",
    ],
  },
  {
    title: "Digital Public Infrastructure (DPI)",
    icon: Landmark,
    items: [
      "Digital Identity and Authentication Platforms",
      "Digital Payment Infrastructure",
      "Consent-based Data Sharing Frameworks",
      "Government Service Delivery Platforms",
      "Public Digital Registries",
      "Secure and Scalable National Digital Platforms",
    ],
  },
  {
    title: "Aviation Digital Transformation",
    icon: Plane,
    items: [
      "Airport Operations Management Systems",
      "Passenger Processing and Self-service Solutions",
      "Flight Information Display Systems",
      "Aviation Data Integration Platforms",
      "Smart Baggage Tracking Solutions",
      "Airport Resource and Asset Management",
    ],
  },
  {
    title: "Smart Transportation Ecosystem",
    icon: BusFront,
    items: [
      "Intelligent Transport Management Systems",
      "Smart Ticketing and Fare Collection",
      "Real-time Vehicle Tracking and Fleet Management",
      "Traffic Monitoring and Control Systems",
      "Passenger Information Systems",
      "Integrated Multimodal Transportation Platforms",
    ],
  },
  {
    title: "National Data Exchange & Interoperability",
    icon: Network,
    items: [
      "National Data Exchange Platform Development",
      "Government System Interoperability Frameworks",
      "Secure API Gateway and Service Integration",
      "Master Data Management and Data Governance",
      "Cross-agency Data Sharing Solutions",
      "Data Standards and Integration Architecture",
    ],
  },
  {
    title: "Smart City Platforms",
    icon: Building2,
    items: [
      "Integrated City Operations Platforms",
      "Smart Utility and Energy Management",
      "Public Safety and Emergency Response Systems",
      "Environmental Monitoring Solutions",
      "Smart Parking and Traffic Management",
      "Urban Analytics and City Decision Support Systems",
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
