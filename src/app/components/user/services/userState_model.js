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

       UserStateModel.$inject = [];

      function UserStateModel() {
          var USERPORIFLE_ENDPOINT = '/assets/remote-data/user_profile.json';
          var _userProfile;

          var services = {
              getUserProfile: getUserProfile
          };

          return services;

          function getUserProfile() {
              /* */
              if(!_userProfile){
                  return scaffoldingRemoteServices.getDashBoard(USERPORIFLE_ENDPOINT).then(
                      function(result){
                          console.log('scaffoldingRemoteServices result=',result);
                          if(result){
                              console.log(result);
                          }else{
                              _userProfile = result;
                          }
                      });
              }else{
                  return _userProfile;
              }

          }
  }

})();