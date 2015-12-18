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
   * data{
   *    type:'name of notification',
   *    value:{}
   * }
   *
   *
   ?*
   *  use Example
   *  $scope.notifications
   *
     $scope.notify = function() {
      NotifyingService.publish( {
                                     type:notifyTypes().AUTH_STATE
                                     data:{loggedIn:false};
                                });
      };
   *
   * NotificationPubSub.subscribe($scope, function pubEvent() {
   *     $scope.notifications++;
   *});
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
              var dataDf = $q.defer();
              /* */
              if(!_userProfile){
                  UserRemotingService.getUserProfile(USERPORIFLE_ENDPOINT).then(
                      function(result){
                              _userProfile = result;
                              dataDf.resolve(_userProfile);
                      }
                  );
                  return dataDf.promise;
              }else{
                  return  dataDf.resolve(_userProfile);
              }

          }
  }

})();