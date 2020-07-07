const path = require('path');

module.exports = ({ config }) => {

  // Twig:
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twigjs-loader',
      },
    ],
  });

  config.resolve.alias['components'] = path.resolve( __dirname, '../templates/components/');
  config.resolve.alias['templates'] = path.resolve( __dirname, '../templates/');

  config.module.rules.push({
    test: /\.(scss)$/,
    include: path.resolve(__dirname, "./../"),
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader",
        options: {
          autoprefixer: {
            browsers: ["last 2 versions"]
          },
          // sourceMap: true,
          ident: "postcss"
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  });

  return config;
};