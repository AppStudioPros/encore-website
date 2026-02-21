import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encoresvcsllc.com" },
    ],
  },
};

export default nextConfig;
