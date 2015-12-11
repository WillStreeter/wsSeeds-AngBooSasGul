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
    var userModel=null;


    return {
        getUser: function(){
            return userModel;
        },

        setUser: function(user){
            userModel = user;
        }

    };

  }

})();