const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EDefinedWebpackPlugin = require('extended-define-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry:   './src/client/index.js',
  output:  {
    filename: 'cv.js',
    path:     path.resolve(__dirname, 'dist')
  },
  context: __dirname,
  resolve: {
    modules:    [path.resolve(__dirname, 'src/client'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },
  module:  {
    rules: [
      {
        test:    /\.js?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use:     [{
          loader:  'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2', 'react-hmre'],
            plugins: ['jsx-display-if']
          }
        }],
      },
      {
        test: /\.css$/,
        use:  [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use:  [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {test: /\.woff$|\.ttf$|\.woff2$|\.eot$/, loader: 'url-loader', options: {limit: 30000}},
      {test: /\.jpe?g$|\.gif$|\.png$|\.svg$/, loader: 'url-loader', options: {limit: 30000}},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:    'CV',
      template: path.resolve(__dirname, 'src/client/index.html')
    }),
    new EDefinedWebpackPlugin({
      __DEV__: true
    }),
    new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      // In `server` mode analyzer will start HTTP server to show bundle report.
      // In `static` mode single HTML file with bundle report will be generated.
      // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
      analyzerMode:   'disabled',
      reportFilename: 'report.html',
    })
  ]
}