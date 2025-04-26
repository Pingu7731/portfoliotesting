/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        'node-fetch': false,
      };
    }
    return config;
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

// Temporarily disable Sentry for build
export default nextConfig;

// Original Sentry configuration commented out
/*
export default withSentryConfig(nextConfig, {
  silent: true,
  org: "javascript-mastery",
  project: "javascript-nextjs",
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
*/