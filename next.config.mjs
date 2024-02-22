/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'cdn.rareblocks.xyz', 'lh3.googleusercontent.com' ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
