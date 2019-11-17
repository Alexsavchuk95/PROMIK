const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const stagingEmbeddedScript = '';


/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = () => ({
  resolve: {
    alias: {
      Root: path.resolve('./'),
      SourceRoot: path.resolve('./src/'),
      AssetsRoot: path.resolve('./src/assets'),
      StyledComponentsRoot: path.resolve('./src/styledComponents'),
      ComponentsRoot: path.resolve('./src/components'),
      ContainersRoot: path.resolve('./src/containers'),
      ConfigsRoot: path.resolve('./src/configs'),
      UtilsRoot: path.resolve('./src/utils'),
      ActionsRoot: path.resolve('./src/actions'),
      ReducersRoot: path.resolve('./src/reducers'),
      SagasRoot: path.resolve('./src/sagas'),
      ColorsRoot: path.resolve('./src/configs/colors'),
      EnvRoot: path.resolve('./src/configs/env'),
      ConstantsRoot: path.resolve('./src/configs/constants'),
      ApiRequestsRoot: path.resolve('./src/api'),
      TranslationsRoot: path.resolve('./src/translations'),
      StoriesRoot: path.resolve('./stories'),
    }
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: 'info',
    hot: true,
    watchContentBase: true,
    port: process.env.BACKOFFICE_PORT || 8050,
    inline: true,
    host: '0.0.0.0'
  },
  entry: [
    '@babel/polyfill',
    './src/main.js'
  ],
  output: {
    path: NODE_ENV === 'production' ? path.resolve(__dirname, 'prod') : path.resolve(__dirname, 'stage'),
    publicPath: '/',
    filename: '[hash].bundle.min.js'
  },
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ]
          ]
        },
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mov|mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/video/[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false,
      })
    ],
  },
  plugins: [
    new WebpackCleanupPlugin({
      exclude: ['.git/**/*', 'web.config', 'README.md', 'favicon.ico']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      title: 'CarGoo - history start here',
      embeddedScript: NODE_ENV !== 'production'
        ? stagingEmbeddedScript
        : '',
      brand: 'CarGoo',
      color: '',
      rollbarSnippet: '',
      template: path.resolve(__dirname, './src/index.html')
    }),
    new FaviconsWebpackPlugin('./src/assets/favicons/favicon.png')
  ]
});
