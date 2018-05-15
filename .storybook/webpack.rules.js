function rules(PKG_DIR, STORIES_DIR, SETTINGS_DIR) {
  return [
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
        STORIES_DIR,
        SETTINGS_DIR,
      ],
      use: [{ loader: 'babel-loader' }]
    },
    {
      test: /\.css/,
      use: [{ loader: 'babel-loader'}, { loader: 'styled-jsx-css-loader' }]
    }
  ]
}

module.exports = rules
