/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      '*.html': {
        loaders: ['./raw-html-loader.cjs'],
        as: '*.js',
      },
    },
    resolveAlias: {
      '@designcodeio/threeui/style.css': './src/shaders/threeui.css',
      '@designcodeio/threeui': './src/shaders/laser/LaserCollection.tsx',
    },
  },
  async redirects() {
    return [
      // Solutions detail routes -> Consolidated /solutions#<anchor>
      { source: '/solutions/vapt', destination: '/solutions#vapt', permanent: true },
      { source: '/solutions/grc', destination: '/solutions#grc', permanent: true },
      { source: '/solutions/cryptography-pqc', destination: '/solutions#cryptography-pqc', permanent: true },
      { source: '/solutions/managed-security', destination: '/solutions#managed-security', permanent: true },

      // Technology detail routes -> Consolidated /technology#<anchor>
      { source: '/why-pqc', destination: '/technology#why-pqc', permanent: true },
      { source: '/technology/why-pqc', destination: '/technology#why-pqc', permanent: true },
      { source: '/technology/cryptography', destination: '/technology#cryptography', permanent: true },
      { source: '/technology/post-quantum-cryptography', destination: '/technology#post-quantum-cryptography', permanent: true },
      { source: '/technology/crypto-agility', destination: '/technology#crypto-agility', permanent: true },
      { source: '/technology/security-architecture', destination: '/technology#security-architecture', permanent: true },

      // Industries sub-routes -> Consolidated /industries#<anchor>
      { source: '/industries/financial-services', destination: '/industries#financial-services', permanent: true },
      { source: '/industries/healthcare', destination: '/industries#healthcare', permanent: true },
      { source: '/industries/technology', destination: '/industries#technology', permanent: true },
      { source: '/industries/telecommunications', destination: '/industries#telecommunications', permanent: true },
      { source: '/industries/manufacturing', destination: '/industries#manufacturing', permanent: true },
      { source: '/industries/government', destination: '/industries#government', permanent: true },
      { source: '/industries/critical-infrastructure', destination: '/industries#critical-infrastructure', permanent: true },

      // Insights sub-routes -> Consolidated /insights#<anchor>
      { source: '/insights/research', destination: '/insights#research', permanent: true },
      { source: '/insights/pqc', destination: '/insights#pqc', permanent: true },
      { source: '/insights/cryptography', destination: '/insights#cryptography', permanent: true },
      { source: '/insights/security-architecture', destination: '/insights#security-architecture', permanent: true },
      { source: '/insights/grc', destination: '/insights#grc', permanent: true },

      // Company sub-routes -> Consolidated /company#<anchor>, /careers & /contact
      { source: '/company/about', destination: '/company#about', permanent: true },
      { source: '/company/about-infrys', destination: '/company#about', permanent: true },
      { source: '/company/capabilities', destination: '/company#capabilities', permanent: true },
      { source: '/company/our-capabilities', destination: '/company#capabilities', permanent: true },
      { source: '/company/how-we-work', destination: '/company#how-we-work', permanent: true },
      { source: '/company/careers', destination: '/careers', permanent: true },
      { source: '/jobs', destination: '/careers', permanent: true },
      { source: '/company/contact', destination: '/contact', permanent: true },
    ]
  },
}

export default nextConfig
