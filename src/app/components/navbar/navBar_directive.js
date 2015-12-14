(function(){
   'use strict';

   angular
    .module('wsSeed.navbar.module')
    .directive('bootstrapNavBar', bootstrapNavBar);

     function bootstrapNavBar(){
            var directive = {
                    restrict: 'EA',
                    templateUrl:'app/components/navbar/navbar.html',
                    scope: {},
                    controller: NavBarCtrl,
                    controllerAs:'vm'
                    /**
                     * if the scope is isolated
                     * bindToController: true
                     * */
            };

            return directive;
     }


     NavBarCtrl.$inject = ['$window', '$rootScope', 'PubSub', 'UserStateModel','$route'];

     function NavBarCtrl($window, $rootScope, PubSub, UserStateModel, $route) {

           var vm = this;

           vm.user = null;


           if($route.current && $route.current.name){
                 vm.viewState = $route.current.name;
           }

           $rootScope.$on("$routeChangeStart",   function (event, current) {
                 if(current && current.name){
                     vm.viewState = current.name;
                 }
           });

           function sendNotification(notificationType){
                PubSub.publish({
                       type:notificationType, data:null
                 });
           }

           vm.isAuthenticated = function(){
                 return vm.user ? false : true;
           };

           vm.logoutBtnClicked = function(){
               UserStateModel.setUser(null);
               $window.localStorage.currentUser  = undefined;
               $rootScope.currentUser = null;
               sendNotification(PubSub.notifyTypes().USER_LOGOUT);
           };

           vm.loginBtnClicked = function(){
                sendNotification(PubSub.notifyTypes().USER_LOGIN);
           };
     }

}());