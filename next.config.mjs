/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: null,
  },
  webpack: (config) => {
    // Ignore .ts, .tsx, .d.ts files at build time
    config.module.rules.push({
      test: /\.(ts|tsx|d.ts)$/,
      use: [],
    });
    return config;
  },
};

export default nextConfig;
