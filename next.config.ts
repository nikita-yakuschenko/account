import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  logging: {
    browserToTerminal: false,
  },
};

export default nextConfig;
