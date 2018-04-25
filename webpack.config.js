module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.s?css$/, loader: "style-loader!css-loader!sass-loader"},
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets: ['es2015', 'react']}}
    ]
  }
}
