/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... any existing configuration
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig; // This is ES Module syntax