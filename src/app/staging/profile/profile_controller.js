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

  .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$scope'];
      /* @ngInject */
  function ProfileCtrl($scope) {
     var vm  = this;
     vm.viewState ='ProfileCtrl';
   }
})();
