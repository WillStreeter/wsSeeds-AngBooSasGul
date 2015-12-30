'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : true,

    frameworks: ['jasmine'],

    reporters: ['progress','html'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },

    browsers : ['Firefox'],

    plugins : [
      'karma-htmlfile-reporter',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    },

    htmlReporter: {
      outputFile: 'e2e/units.html',

      // Optional
      pageTitle: 'Unit Tests For BareBones',
      subPageTitle: 'Simple test of various components'
    }
  };

  config.set(configuration);
};
