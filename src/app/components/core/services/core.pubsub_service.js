
(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc service
   * @name app.core.service:PubSub
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
      .module('wsSeed.app.core.module')
      .service('PubSub', PubSub);

  PubSub.$inject = ['$rootScope'];

  function PubSub($rootScope) {

    return {
        notifyTypes: function(){
            return {
                //data: 'reqLogin' or 'reqLogout'
                USER_LOGIN:'USER_LOGIN',
                USER_LOGOUT:'USER_LOGOUT'

            };
        },
        subscribe: function(scope, callback) {
            var handler = $rootScope.$on('notifying-service-event', callback);
            scope.$on('$destroy', handler);
        },

        publish: function(notifyData) {
            $rootScope.$emit('notifying-service-event', notifyData);
        }
    };
  }


})();