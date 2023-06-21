/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(mov|mp4|webp|pdf|ico|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/vercel/path0/.next/server/chunks/',
            name: (resourcePath, resourceQuery) => {
              // Get the file extension
              const extension = resourcePath.split('.').pop();
              // Determine the appropriate folder based on the file extension
              let folder;
              if (extension === 'webp' || extension === 'ico' || extension === 'png') {
                folder = 'images';
              } else if (extension === 'pdf') {
                folder = 'pdf';
              } else {
                folder = 'videos';
              }
              // Generate the new file path
              const name = `/${folder}/[name].[hash].[ext]`;
              return name;
            },
          },
        },
      },
    );
    return config;
  },
};

module.exports = nextConfig;