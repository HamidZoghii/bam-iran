import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/bam-iran' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
