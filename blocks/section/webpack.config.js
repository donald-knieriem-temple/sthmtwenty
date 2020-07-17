// webpack.config.js
const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.twig$/,
        use: [
          { loader: 'twig-loader'  },
          { loader: 'extract-loader' },
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              interpolate: true,
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
      },
    ]
  }
};