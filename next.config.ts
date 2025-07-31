import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Will not fail the build on ESLint errors
  },
};

export default nextConfig;
