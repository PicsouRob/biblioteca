/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.rareblocks.xyz', 'lh3.googleusercontent.com', 'books.google.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
