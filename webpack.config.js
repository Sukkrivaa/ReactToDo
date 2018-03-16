var webpack = require('webpack');
var path = require("path")

module.exports = {
  entry: ['script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
  './app/app.jsx'],
  //This is what we will usually put at the Head of the Html document
  externals: {
    jquery: 'jQuery'
  },
  //Don't need to include this as a dependency in webpack - because we added this into our "head" above
  plugins: [
    new webpack.ProvidePlugin({
      "$": 'jquery',
      "jQuery": 'jquery'
    })
  ],
  //So that we don't have to write var $ = require("jquery") for app.jsx
  output: {
    path: __dirname,
    filename: './public/bundle.js'
    //This is what we all compile to
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules", "./app/components", "./app/api"
      //This is where all the files come from - the things that make up the bundle other than app.jsx (the main file)
    ],
    alias: {
      applicationStyles: "app/styles/app.scss",
      actions: "app/actions/actions.jsx",
      reducers: "app/reducers/reducers.jsx",
      configureStore: "app/store/configureStore.jsx"
      //So that we can require the short form
    },
    extensions: ['', '.js', '.jsx']
    //So that we can exclude the extensions
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        //Because we have written our code in babel - we need to complile into normal javascript
        query: {
          presets: ['react', 'es2015', 'stage-2']
          //The babel code that we have written needs to compile from all of these to normal javascript
        },
        test: /\.jsx?$/,
          //Anything with .jsx need to be compiled
        exclude: /(node_modules|bower_components)/
          //This are things that we don't even touch
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss")
      //So that the SASS foundation source code can be compiled to normal CSS
      //The foundation library we downloaded is in Saas
      //So that webpack can understand - webpack manages our css as well as our javascript
    ]
  },
  devtool: 'cheap-module-eval-source-map'
  //So that when debugging we know where the mistake is in our original file
};
