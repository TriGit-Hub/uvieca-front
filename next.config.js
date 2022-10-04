const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = withPlugins([], nextConfig);
