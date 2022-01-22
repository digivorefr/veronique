const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const appConfig = {
  mode: 'development',
  context: __dirname,
  entry: {
    app:[
      // This entry is required to correctly enable HMR.
      'webpack-hot-middleware/client',
      // 'webpack-hot-middleware/client?dynamicPublicPath=false&timeout=4000&reload=true&path=./dist/assets/_hmr',
      './src/app.ts',
    ],
    style:[
      // This entry is required to correctly enable HMR.
      'webpack-hot-middleware/client',
      // 'webpack-hot-middleware/client?dynamicPublicPath=false&timeout=4000&reload=true&path=./dist/assets/_hmr',
      './src/styles/index.scss',
    ],
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      // Stylesheets.
      {
        test: /\.s?css$/,
        use: [
          // `style-loader` turns CSS into JS modules.
          {
            loader: 'style-loader',
            options: {},
          },
          // `css-loader` resolves paths in CSS and adds assets as dependencies.
          {
            loader: 'css-loader',
            options: { sourceMap: true, import: false },
          },
          // `postcss-loader` is used to autoprefix CSS to ensure compatibility with all browsers.
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-sort-media-queries'], ['autoprefixer']],
                sourceMap: true,
              },
            },
          },
          // `sass-loader` converts SASS syntax into CSS.
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'scripts': path.resolve(__dirname, 'src/'),
    }
  },
  plugins: [
    // Enables HMR with webpack-dev-middleware.
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      environment: 'development',
      // chunks: ['app'],
      filename: path.resolve('./dist/', 'index.html'),
      template: path.resolve('./src/', 'html/index.html.ejs'),
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    port: 5000,
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
};

const serverConfig = {
  mode: 'development',
  entry: './src/server.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    fallback: {
      fs: false,
      crypto: false,
      buffer: false,
    },
  },
  node: false,
};

module.exports = appConfig;