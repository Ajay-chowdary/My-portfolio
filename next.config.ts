import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow our own trusted, static SVG cover art through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
