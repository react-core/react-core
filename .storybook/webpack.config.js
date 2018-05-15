const path = require('path')
const PKG_DIR = path.resolve(__dirname, '..', 'packages')
const SETTINGS_DIR = path.resolve(__dirname, '..', '.storybook')
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (base, env) => {
  const config = genDefaultConfig(base, env)
  config.module.rules = [
    {
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'markdown-loader',
        },
      ],
    },
    {
      test: /\.(woff2?|ttf|eot)/,
      use: [
        {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      ]
    },
    {
      test: /\.jsx?/,
      include: [
        PKG_DIR,
        SETTINGS_DIR
      ],
      use: [{ loader: 'babel-loader' }]
    },
    {
      test: /\.css/,
      use: [{ loader: 'to-string-loader'}, { loader: 'css-loader'}]
    },
    {
      test: /\.scss/,
      use: [{ loader: 'babel-loader'}, { loader: 'styled-jsx-css-loader' }]
    }
  ]

  config.resolve.modules = ['node_modules', path.join(__dirname, '..', 'node_modules')]
  return config
}
