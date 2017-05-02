const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ROOT = __dirname;

const PATHS = {
  root: ROOT,
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  assets: path.join(ROOT, 'assets')
};

const FILE_MATCHERS = {
  JS: /\.jsx?$/,
  CSS: /\.css$/,
  FONTS: /\.(eot|svg|ttf|woff|woff2)$/,
  IMAGES: /\.jpe?g$/
};

const commonConfig = (env) => {
  return {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      filename: '[name].[ext]',
    },
    devtool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Gameder',
        template: 'common/index.ejs'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      }),
      // new CopyWebpackPlugin([
      //   {
      //     from: 'assets/',
      //     to: 'assets/'
      //   }
      // ]),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: FILE_MATCHERS.JS,
          include: [
            PATHS.app
          ],
          exclude: [
            PATHS.build,
            path.join(ROOT, 'node_modules')
          ],
          loader: 'babel-loader',
          options: {
            // Enable caching for improved performance during
            // development.
            // It uses default OS directory by default. If you need
            // something more custom, pass a path to it.
            // I.e., { cacheDirectory: '<path>' }
            cacheDirectory: true,
          },
        },
        {
          test: FILE_MATCHERS.CSS,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: FILE_MATCHERS.FONTS,
          loader: 'file-loader',
        },
        {
          test: FILE_MATCHERS.IMAGES,
          loader: 'url-loader'
        }
      ],
    },
  };
};

const productionConfig = (env) => commonConfig(env);

const developmentConfig = (env) => {
  const config = {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. Good for complex setups.
      historyApiFallback: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      hotOnly: true,
      // Parse host and port from env to allow customization.
      //
      // If you use Docker, Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: process.env.HOST, // Defaults to `localhost`
      port: 9090, // Defaults to 8080
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    module: {
      rules: [
        // {
        //   test: FILE_MATCHERS.JS,
        //   enforce: 'pre',
        //
        //   loader: 'eslint-loader',
        //   options: {
        //     emitWarning: true,
        //   },
        //   exclude: [
        //     PATHS.build,
        //     path.join(ROOT, 'node_modules')
        //   ]
        // },
      ]
    }
  };

  return merge(commonConfig(env), config);
};


module.exports = (env) => {
  process.env.BABEL_ENV = env;

  if (env === 'production') {
    return productionConfig(env);
  }

  return developmentConfig(env);

};
