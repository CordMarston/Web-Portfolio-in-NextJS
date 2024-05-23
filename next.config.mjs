/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [{
        source: '/:path*',
        has: [{ type: 'host', value: 'www.cordmarston.com' }],
        destination: 'https://cordmarston.com/:path*',
        permanent: true
    }]
};

export default nextConfig;
