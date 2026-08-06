/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/mantenimiento-edificios",
        destination: "/servicios/mantenimiento-consorcios",
        permanent: true,
      },
      {
        source: "/servicios/interiorismo",
        destination: "/servicios/refacciones-diseno",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
