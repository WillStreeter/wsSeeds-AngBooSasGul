
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
      .factory('UserRemotingService', UserRemoting);

  UserRemoting.$inject = ['$http'];

  function UserRemoting($http) {

      return {
          getUserProfile: getUserProfile
      };

      function getUserProfile(endPoint) {
          return $http.get(endPoint)
              .then(getUserProfileComplete)
              .catch(getUserProfileError);

          function getUserProfileComplete(response) {
              return response.data;
          }

          function getUserProfileError(error) {
              return error;
          }
      }
  }

})();