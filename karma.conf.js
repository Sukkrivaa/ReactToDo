var webpackConfig = require("./webpack.config.js");

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    //The browser that will be used to run our test - best to always use chrome
    singleRun: true,
    //Basically if it will literally open the browser in the background
    frameworks: ['mocha'],
    //Mocha is what we use to actually compile the tests written in expect - karma is what enables us to run them in the command line
    files: ['node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/foundation.min.js','app/tests/**/*.test.jsx'],
    //Files that will be loaded into our browser when karma tests them
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
      //Modifies the given file into testable javascript
    },
    reporters: ['mocha'],
    //The framwork that is used to render the ticks...
    client: {
      mocha: {
        timeout: "10000"
        //How long to wait before automatically failing the test
      }
    },
    webpack: webpackConfig,
    //So that we can link to webpack - so that while testing you can require and everything
    webpackServer: {
      noInfo: true
      //If we are using webpack on the server side
    }
  });
};
