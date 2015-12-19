(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc controller
   * @name app.account.controller:LoginCtrl
   *
   * @description
   * Interface to login a registered user
   */
  angular
      .module('wsSeed.user.module')
      .controller('LoginCtrl', LoginCtrl);

  //LoginCtrl.$inject = ['$uibModalInstance', 'UserRemoting', '$location'];
  LoginCtrl.$inject = ['$uibModalInstance'];
  /* @ngInject */
  //function LoginCtrl($uibModalInstance, UserRemoting, $location) {
   function LoginCtrl($uibModalInstance) {
      var vm = this;

      vm.modalInstance = $uibModalInstance;
      /*vm.login = function() {
          UserRemoting.loginUser(vm.email, vm.password).then(
              function (loginResult) {
                  $location.path('/');
                  vm.modalInstance.close();
              },
              function (err) {
                  $location.path('/');
                  vm.modalInstance.close();
              });
      };*/
   /*
    *
    * Used with third party authentications like twitter, google+, facebook, etc.
    vm.authenticate = function(provider) {
      $auth.authenticate(provider)
          .then(function(response) {
             $window.localStorage.currentUser = JSON.stringify(response.data.user);
             $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
          })
        .catch(function(response) {
              console.log(response);
        });
    };
    */
  }
})();
