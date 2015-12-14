(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc controller
   * @name wsSeed.coreModule.controller:CoreBaseCtrl
   *
   * @description
   * Interface to login a registered user(
   */
  angular
  .module('wsSeed.mainStage.module')

  .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope'];
      /* @ngInject */
  function HomeCtrl($scope) {
     var vm  = this;
     vm.viewState ='HomeCtrl';
   }
})();
