(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc service
   * @name app.core.service:NotificationPubSub
   *
   * @propertyOf app.core
   * @requires
   * $rootScope
   *
   * @description
   * Service for app wide event notification.
   *
   *
   *
   *
   *
   */
  angular
      .module('wsSeed.user.module')
      .factory('UserStateModel', UserStateModel);

       UserStateModel.$inject = ['$q','UserRemotingService'];

      function UserStateModel($q, UserRemotingService) {

          var USERPORIFLE_ENDPOINT = '/assets/remote-data/user_profile.json';

          var _userProfile;

          var services = {
              getUserProfileData: getUserProfileData
          };

          return services;

          function getUserProfileData() {
              /* */
              if(!_userProfile){
                  var dataDf = $q.defer();
                  UserRemotingService.getUserProfile(USERPORIFLE_ENDPOINT).then(
                      function(result){
                              _userProfile = result;
                              dataDf.resolve(_userProfile);
                      }
                  );
                  return dataDf.promise;
              }else{
                  //return $q.when( _userProfile );    // angular 1.2+
                  return $q.resolve( _userProfile ); // angular 1.4+, alias to `when` to match ES6
              }

          }
      }

})();