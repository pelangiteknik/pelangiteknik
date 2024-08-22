/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'localhost:3000',
            'localhost',
            'amazonaws.com',
            'tsuzumi-bucket.s3.ap-southeast-1.amazonaws.com',
            'tsuzumi-bucket.s3.amazonaws.com',
            'pelangiteknik.vercel.app',
            'vercel.app'
        ],
    },
};
module.exports = nextConfig
