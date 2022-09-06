const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const version = "<!-- %INSERT_ENV_CONFIG% -->";
const version = require('child_process').execSync('git rev-parse HEAD')
  .toString().trim().slice(0, 7)
console.log(version)

const isProd = process.env.NODE_ENV !== 'development'

module.exports = {
  entry: {
    // oneentry: './src/entry.js',
    app: './src/index.js',
    // foo1: './src/foo.js',
    // bar: './src/bar.js',
  },
  // entry: './src/index.js',
  optimization: {
    minimize: false,
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        vond: {
          // 包含项目内和库内
          test: /lodash/,
          name: 'loda',
          chunks: 'all',
        },
      },
    },
    // runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'url-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `[name].${version}.[ext]`,
            },
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: `[name].${version}.[ext]`,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: isProd ? `[name].${version}.js` : `[name].js`,
    chunkFilename: isProd ? `[name].${version}.js` : `[name].js`,
    path: path.resolve(__dirname, `dist`),
    publicPath:
      'https://img.cdn.jogiter.cn/public/cdn-demo/runtime-public-path/',
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: false,
      // publicPath: '',
      // inject: false,
    }),
    new WebpackManifestPlugin({
      filter(file) {
        // console.log(file);
        return !/\.html$/i.test(file.name)
      },
      fileName: `manifest.${version}.json`,
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `[name].${version}.css`,
    }),
    // {
    //   apply(compiler) {
    //     const self = this
    //     compiler.hooks.done.tap('MyPlugin', (stats) => {
    //       const assetList = Object.keys(stats.compilation.assets)
    //       console.log(assetList)
    //       console.log(Object.keys(stats.compilation))
    //       fs.readFileSync()
    //     })
    //   }
    // }
  ],
}
