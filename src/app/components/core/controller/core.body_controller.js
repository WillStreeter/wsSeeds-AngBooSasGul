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
  .module('wsSeed.app.core.module')

  .controller('CorebaseCtrl', CorebaseCtrl);

  CorebaseCtrl.$inject = ['$scope',  '$uibModal', 'PubSub'];
      /* @ngInject */
      function CorebaseCtrl($scope,  $uibModal, PubSub) {

            var vm = this;
            vm.modalInstance = null;
            vm.animationsEnabled = true;


           /* Global Event handler used for capturing request
            *
            */

            PubSub.subscribe($scope, function publishEvent(event, notifyData) {
                if(notifyData.type === PubSub.notifyTypes().USER_LOGIN){
                 showLogin();
                }
            });

            function showLogin() {
                    vm.modalInstance = $uibModal.open({
                      animation:  vm.animationsEnabled,
                      templateUrl: 'modalContentBase.html',
                      controller:  'LoginCtrl',
                      controllerAs: 'vm',
                      bindToController:true
                    });
             }
      }
})();
