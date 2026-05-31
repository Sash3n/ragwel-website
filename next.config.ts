import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export compatible. Switch `output` to 'export' for a fully static
  // build (out/) — left as default for Vercel standard SSG + image optimisation.
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    // For `output: 'export'` static hosting, uncomment:
    // unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
