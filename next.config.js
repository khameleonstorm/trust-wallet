/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ap.rdcpix.com', "ar.rdcpix.com", "m.media-amazon.com", "firebasestorage.googleapis.com", "https://s3.tradingview.com/tv.js"], 
  },
  env: {
    NEW_KEY: "ef9d5738d2msheb4a085b7763886p1b7162jsnf2071a6e9d8b",
  },
}

module.exports = nextConfig