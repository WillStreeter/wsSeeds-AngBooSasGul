
(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc service
   * @name app.account.service:Account
   *
   * @propertyOf app.account
   * @requires
   * $http
   *
   * @description
   * Service for updating user profiles (accounts)
   */

  angular
      .module('wsSeed.user.module')
      .factory('UserRemoting', UserRemoting);

  UserRemoting.$inject = ['$resource'];

  function UserRemoting($resource) {
      var LoginResource = $resource("/api/login");
      var serviceObject = {loginUser: function (userName, password){
           //this promise will be fulfilled when the response is retrieved for this call
          return LoginResource.save({}, {userName: userName, password: password}).$promise;
      }};
      return serviceObject;
  }

})();