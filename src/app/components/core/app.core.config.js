
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name app.account:cfgAccountRoute
   *
   * @requires ($stateProvider)
   * @propertyOf app.account
   *
   * @description
   * State definitions and configuration for the account module
   */

  angular
  .module('wsSeed.app.core.module')
  .config(appCoreConfig);

   appCoreConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

   function appCoreConfig($routeProvider, $locationProvider,  $httpProvider) {
         $routeProvider.otherwise('/');
         $locationProvider.html5Mode(true);
  }

})();