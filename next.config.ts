import type { NextConfig } from "next";
import os from "node:os";
import path from "node:path";

// iCloud Drive stalls Turbopack when .next is written into CloudDocs.
const onICloud = process.cwd().includes("Mobile Documents");

const nextConfig: NextConfig = {
  distDir: !process.env.VERCEL && onICloud
    ? path.join(os.tmpdir(), "adale-martin-next")
    : ".next",
  async redirects() {
    return [
      { source: "/about-adale", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
