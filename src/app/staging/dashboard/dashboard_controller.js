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

  .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['$scope'];
      /* @ngInject */
  function DashboardCtrl($scope) {
     var vm  = this;
     vm.viewState ='DashboardCtrl';
   }
})();
