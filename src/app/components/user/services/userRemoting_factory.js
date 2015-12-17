
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

  UserRemoting.$inject = ['$http'];

  function UserRemoting($resource) {

      return {
          getUserProfile: getUserProfile
      };

      function getUserProfile(endPoint) {
          return $http.get(endPoint)
              .then(getUserProfileComplete)
              .catch(getDashBoardError);

          function getUserProfileComplete(response) {
              return response;
          }

          function getUserProfileError(error) {
              //no error.. from bad call
              //var myError = new Error(["api.error"]);
              return error;
          }
      };
  }

})();