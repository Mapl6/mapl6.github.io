import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // GitHub Pages serves static files only
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
