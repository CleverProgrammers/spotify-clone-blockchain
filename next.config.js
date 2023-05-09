/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'angartwork.akamaized.net',
      'i.scdn.co',
      'encrypted-tbn1.gstatic.com',
      'resources.tidal.com',
      't2.genius.com'
    ],
  },
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['localhost'],
//   },
// }