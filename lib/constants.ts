import {
  FileText,
  Scale,
  Clock,
  Shield,
  Calculator,
  Search,
  Building2,
  Mountain,
  Zap,
  TrainFront,
  Route,
  Plane,
  Anchor,
  Home,
  Factory,
  Fuel,
  type LucideIcon,
} from "lucide-react";

// ── Brand ──────────────────────────────────────────────
export const COMPANY = {
  name: "Ragwel Claims Consultants Ltd.",
  shortName: "Ragwel",
  tagline: "Your Commercial Position, Expertly Defended.",
  sector: "Construction Claims Consultancy",
} as const;

export const CONTACT = {
  emailPrimary: "joseph@ragwelcc.com",
  emailAlt: "raguelcc@gmail.com",
  phone: "+44 7857 710600",
  phoneHref: "tel:+447857710600",
  offices: [
    { city: "London", country: "United Kingdom" },
    { city: "Midrand", country: "South Africa" },
  ],
} as const;

// ── Navigation ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
] as const;

// ── Services (Home overview — numbered rows) ───────────
export interface ServiceRow {
  number: string;
  icon: LucideIcon;
  title: string;
  tag: string;
}

export const SERVICE_ROWS: ServiceRow[] = [
  { number: "01", icon: FileText, title: "Commercial & Contracts Management", tag: "All phases" },
  { number: "02", icon: Scale, title: "Claims Management & Formulation", tag: "Tribunals · Adjudication" },
  { number: "03", icon: Clock, title: "Delay Analysis & Programme Review", tag: "Forensic" },
  { number: "04", icon: Shield, title: "Dispute Avoidance & Resolution", tag: "Conciliation · Arbitration" },
  { number: "05", icon: Calculator, title: "Cost Management", tag: "Valuations · Final Account" },
  { number: "06", icon: Search, title: "Forensic Quantity Surveying", tag: "Cost Recovery" },
];

// ── Services (full cards — Services page) ──────────────
export interface ServiceCard {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    number: "01",
    title: "Commercial Management",
    description:
      "Comprehensive commercial oversight from project initiation through to final account settlement and close-out.",
    tags: ["All Project Phases", "Close-Out"],
  },
  {
    number: "02",
    title: "Contracts Management",
    description:
      "Contract administration, risk allocation, change management and NEC/FIDIC/JCT expertise.",
    tags: ["NEC", "FIDIC", "JCT"],
  },
  {
    number: "03",
    title: "Cost Management",
    description:
      "Budget control, valuations, cost reporting, and final account settlement.",
    tags: ["Valuations", "Budget Control"],
  },
  {
    number: "04",
    title: "Claims Management",
    description:
      "Substantive claims formulation and negotiation for adjudication, conciliation, tribunals, and court actions.",
    tags: ["Adjudication", "Tribunals", "Court"],
  },
  {
    number: "05",
    title: "Dispute Avoidance",
    description:
      "Support on non-contentious matters during project execution to prevent escalation into formal disputes.",
    tags: ["Early Intervention", "Risk Management"],
  },
  {
    number: "06",
    title: "Dispute Resolution",
    description:
      "Representation and advice through adjudication, conciliation, arbitration, and Construction Court proceedings.",
    tags: ["ADR", "Arbitration", "Conciliation"],
  },
  {
    number: "07",
    title: "Delay Analysis",
    description:
      "Forensic programme review, delay attribution, and extension of time analysis for complex projects.",
    tags: ["Forensic", "EOT", "Programme"],
  },
  {
    number: "08",
    title: "Forensic Quantity Surveying",
    description:
      "Detailed cost recovery analysis defending clients through forensic measurement and valuation.",
    tags: ["Cost Recovery", "Measurement"],
  },
];

// ── Sectors ────────────────────────────────────────────
export interface Sector {
  label: string;
  icon: LucideIcon;
}

export const SECTORS: Sector[] = [
  { label: "Civil Infrastructure", icon: Building2 },
  { label: "Mining", icon: Mountain },
  { label: "Power Generation", icon: Zap },
  { label: "Railway Works", icon: TrainFront },
  { label: "Highway Works", icon: Route },
  { label: "Runway Refurbishment", icon: Plane },
  { label: "Ports & Feasibility", icon: Anchor },
  { label: "Property Development", icon: Home },
  { label: "Industrial Buildings", icon: Factory },
  { label: "Oil & Gas", icon: Fuel },
];

// ── Credentials / Professional Registrations ───────────
export interface Credential {
  acronym: string;
  name: string;
  description: string;
}

export const CREDENTIALS: Credential[] = [
  {
    acronym: "RICS",
    name: "Royal Institution of Chartered Surveyors",
    description: "Global professional body for surveying and the built environment.",
  },
  {
    acronym: "CICES",
    name: "Chartered Institution of Civil Engineering Surveyors",
    description: "Professional body for civil engineering and commercial management.",
  },
  {
    acronym: "CIArb",
    name: "Chartered Institute of Arbitrators",
    description: "Leading professional body for dispute avoidance and resolution.",
  },
  {
    acronym: "ICCP",
    name: "Institute of Commercial & Contracts Professionals",
    description: "Standards body for commercial and contracts management practice.",
  },
  {
    acronym: "SCL",
    name: "Society of Construction Law",
    description: "Authority on construction law and the SCL Delay & Disruption Protocol.",
  },
  {
    acronym: "Adjudicators Society",
    name: "Society of Construction Adjudicators",
    description: "Professional community advancing best practice in adjudication.",
  },
];

export const CREDENTIAL_ACRONYMS = CREDENTIALS.map((c) => c.acronym);

// ── Why Ragwel ─────────────────────────────────────────
export interface WhyItem {
  number: string;
  title: string;
  body: string;
}

export const WHY_RAGWEL: WhyItem[] = [
  {
    number: "01",
    title: "Dispute Prevention First",
    body: "Early intervention and contract risk management to prevent costly disputes before they escalate.",
  },
  {
    number: "02",
    title: "Forensic Precision",
    body: "Substantive claims formulation for tribunals, adjudication, conciliation, and Construction Court actions.",
  },
  {
    number: "03",
    title: "Global Experience",
    body: "Experience gained at top global engineering firms across multiple cultures and construction contract frameworks.",
  },
];

// ── Hero metric strip ──────────────────────────────────
export const METRICS = [
  { value: "RICS", label: "Chartered" },
  { value: "CIArb", label: "Arbitration" },
  { value: "2", label: "Global Offices" },
  { value: "ADR", label: "Specialists" },
] as const;

// ── Copy blocks ────────────────────────────────────────
export const HERO_SUBHEADING =
  "Specialised in commercial management, contracts management, cost management, claims management, dispute avoidance and resolution services, delay analysis and forensic claims.";

export const ABOUT_BODY = [
  "Ragwel Claims Consultants Ltd. provides strategic advice and support from the start of a scheme through to project completion, including post-completion close-out reporting, audit control, and collaboration throughout the project's life cycle.",
  "Our team has worked with clients, financiers, investors, and contractors on brownfield site development, mining, power generation, civil infrastructure, railway, highway, runway refurbishment, ports feasibility, property developments, industrial buildings, and oil and gas projects.",
];
