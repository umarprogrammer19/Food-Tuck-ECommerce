import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',  // Add the domain hosting your images
        pathname: '/**',  // Accepts all paths under the given domain
      },
    ],
  },
};

export default nextConfig;
