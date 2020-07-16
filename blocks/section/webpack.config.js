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
          {
            loader: 'twig-loader',
            options: {
              autoescape: false,
            }
          },
        ],
      },
    ]
  }
};