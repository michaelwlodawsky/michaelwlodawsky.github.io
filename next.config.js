/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // TODO: Fix, will be a part of GIF optimization work
  }
}

module.exports = nextConfig
