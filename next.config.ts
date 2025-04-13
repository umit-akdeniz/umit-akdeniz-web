import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['react-tweet'],
  images: {
    domains: ['via.placeholder.com', 'pbs.twimg.com', 'abs.twimg.com'], // Kullandığın harici domain’i ekle
  }
};