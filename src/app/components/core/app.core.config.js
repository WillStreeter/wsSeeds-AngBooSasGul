
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
  .module('wsSeed.app.core.module', ['ngRoute'])
  .config(appCoreConfig);

   appCoreConfig.$inject = ['$routeProvider', '$authProvider', '$httpProvider'];

   function appCoreConfig($routeProvider, $authProvider,  $httpProvider) {

         $routeProvider.otherwise('/');
  }

})();