/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',
  basePath: '/landingpage',
  assetPrefix: './',    // <- make all assets relative
  trailingSlash: true
}

export default nextConfig
