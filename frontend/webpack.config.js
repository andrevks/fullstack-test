const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment? 'development': 'production',
  devtool: isDevelopment? 'eval-source-map': 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: path.resolve(__dirname, 'public'),
    hot: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        target: 'http://localhost:3333',
        onProxyReq: (proxyReq) => {
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', 'http://localhost:3333')
          }
        }
      }
    }
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'public', 'index.html')
      }
    )
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$|(j|t)sx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
}