/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
 //Webpack is same thing as browserify. Makes module system for front end. Even css, html, and other files can be loaded into js files
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'style!css!stylus' }, //this means, if anything comes in as a 'styl' file, run it through the stylus loader, then css loader (which resolves any links in sylesheets), and then style loader which puts it in the head tag. Saves you from having to write a link tag
      { test: /\.css/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel?stage=1', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
