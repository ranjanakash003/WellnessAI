// This line manually and explicitly loads your .env.local file at the
// earliest possible moment, forcing the API key to be available before
// the rest of the application starts.
import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
