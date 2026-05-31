import type { Metadata } from "next";
import { COMPANY, CONTACT } from "./constants";

// Update to the production domain before launch.
export const SITE_URL = "https://ragwelcc.com";

const description =
  "Ragwel Claims Consultants Ltd. — specialists in commercial management, contracts management, cost management, claims management, dispute avoidance and resolution, delay analysis and forensic claims.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s — ${COMPANY.shortName}`,
  },
  description,
  keywords: [
    "construction claims",
    "claims consultancy",
    "delay analysis",
    "dispute resolution",
    "adjudication",
    "arbitration",
    "quantity surveying",
    "NEC",
    "FIDIC",
    "JCT",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name}`,
    description,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

// Per-page metadata helpers.
export const homeMetadata: Metadata = {
  title: COMPANY.tagline,
  description,
};

export const aboutMetadata: Metadata = {
  title: "About Us",
  description:
    "Extensive experience and global reach in construction claims consultancy. Registered with RICS, CICES, CIArb, ICCP, SCL and the Adjudicators Society.",
};

export const servicesMetadata: Metadata = {
  title: "Our Services",
  description:
    "Expert services across commercial, contracts, cost and claims management, dispute avoidance and resolution, delay analysis and forensic quantity surveying.",
};

export const contactMetadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY.name}. Offices in London, United Kingdom and Midrand, South Africa. Phone ${CONTACT.phone}.`,
};

// JSON-LD structured data (LocalBusiness + ProfessionalService).
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: COMPANY.name,
  description,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.emailPrimary,
  slogan: COMPANY.tagline,
  areaServed: ["United Kingdom", "South Africa", "Worldwide"],
  knowsAbout: [
    "Construction Claims",
    "Delay Analysis",
    "Dispute Resolution",
    "Commercial Management",
    "Quantity Surveying",
  ],
  address: CONTACT.offices.map((o) => ({
    "@type": "PostalAddress",
    addressLocality: o.city,
    addressCountry: o.country,
  })),
};
