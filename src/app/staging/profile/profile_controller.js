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

  ProfileCtrl.$inject = ['UserStateModel'];
      /* @ngInject */
  function ProfileCtrl(UserStateModel) {
      var vm  = this;
      vm.userProfile = [];

      activate();

      function activate() {
          return UserStateModel.getUserProfileData().then(function(result) {
              vm.userProfile = result.profile;
              return vm.userProfile;
          });
      }
   }
})();
