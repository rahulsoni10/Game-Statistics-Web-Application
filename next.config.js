/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["media.rawg.io"]
  },
  publicRuntimeConfig:{
    REACT_APP_KEY: 'ca2f7a21209f4766b5a347c998c53d59'
  }
}

module.exports = nextConfig
