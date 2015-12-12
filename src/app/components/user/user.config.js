
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name wsSeed.user.module:cfgUserAccountRoute
   *
   * @requires ($routeProvider)
   * @propertyOf wsSeed.user.module
   *
   * @description
   * State definitions and configuration for the user module
   */

  angular.module('wsSeed.user.module')
  .constant( 'routeStates', {})
  .config(cfgUserAccountRoute);
   // inject cfgUserAccountRoute dependencies
   cfgUserAccountRoute.$inject = ['$routeProvider', 'routeStates'];

   // route config function configuring the passed $stateProvider
   function cfgUserAccountRoute($routeProvider, routeStates) {


   }


})();
