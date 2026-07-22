import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nature_trip",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
