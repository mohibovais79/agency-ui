/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... any existing configuration
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'mir-s3-cdn-cf.behance.net',
            },
        ],
    },
};

export default nextConfig; // This is ES Module syntax