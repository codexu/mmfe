import type { NextConfig } from "next";
import pkg from './package.json';

// next.config.js
const basePath = '/next'
// 静态资源路径前缀
const assetPrefix = process.env.NODE_ENV === 'production' ? `线上域名${basePath}` : `http://localhost:3004${basePath}`

console.log(assetPrefix);

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  /* config options here */
  publicRuntimeConfig: {
    pkg,
    assetPrefix,
  }
};

export default nextConfig;
