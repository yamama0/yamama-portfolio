/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for a year — they're content-hashed so safe.
    minimumCacheTTL: 31536000,
    // Limit the variants Next.js generates. Each variant is a separate
    // build artifact cached on Vercel's edge; tighter ranges = faster
    // first hits, less storage, less origin traffic.
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
