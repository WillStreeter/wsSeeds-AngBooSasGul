'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : true,

    frameworks: ['jasmine'],

    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,

    reporters: ['progress'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },

    browsers : ['Firefox'],

    plugins : [
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    },


    // the default configuration
    junitReporter: {
      outputDir: '', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true // add browser name to report and classes names
    }
  };

  config.set(configuration);
};
