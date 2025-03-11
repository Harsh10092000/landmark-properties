// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         cssChunking: true, // default
//       },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      cssChunking: true, // Optional, as it's the default in Next.js 15
    },
  };
  
  import withBundleAnalyzer from '@next/bundle-analyzer';
  
  const bundleAnalyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  });
  
  export default bundleAnalyzerConfig(nextConfig);