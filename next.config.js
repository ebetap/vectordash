const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 100000,
              outputPath: 'static/',
              publicPath: '/_next/',
            },
          },
        ],
      });

      return config;
    },
  })
);
