import type { NextConfig } from "next";
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
const nextConfig: NextConfig = {
  /* config options here */
  
};

export default nextConfig;
