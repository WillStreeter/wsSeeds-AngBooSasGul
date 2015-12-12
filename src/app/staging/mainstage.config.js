
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name wsSeed.user.module:cfgUserAccountRoute
   *
   * @requires ($routeProvider)
   * @propertyOf wsSeed.user.module
   *
   * @description
   * State definitions and configuration for the user module
   */

  angular.module('wsSeed.mainStage.module')
  .constant( 'routeStates', {
        homeState: {
          name: 'home',
          url: '/',
          templateUrl: 'app/staging/home/home.tpl.html',
          controller: 'HomeCtrl',
          controllerAs:'vm'
        },
        profileState: {
          name: 'userProfile',
          url: '/userProfile',
          templateUrl: 'app/staging/profile/profile.tpl.html',
          controller: 'ProfileCtrl',
          controllerAs:'vm',
          resolve:{
                authCheck:function($auth,$location){
                    if(!$auth.isAuthenticated()){
                        $location.path('/');
                    }
                }
          }
        },
        dashboardState: {
          name: 'dashboard',
          url: '/dashboard',
          templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
          controller: 'DashboardCtrl',
          controllerAs:'vm',
          resolve:{
                authCheck:function($auth,$location){
                    if(!$auth.isAuthenticated()){
                        $location.path('/');
                    }
                }
          }
        },
        d3scenario1State: {
          name: 'd3scenario-1',
          url: '/dashbaord/d3scenario-1',
          templateUrl: 'app/staging/d3scenario/d3scenario_1.tpl.html',
          controller: 'D3scenario1Ctrl',
          controllerAs:'vm',
          resolve:{
                authCheck:function($auth,$location){
                    if(!$auth.isAuthenticated()){
                        $location.path('/');
                    }
                }
          }
        }
      })
  .config(cfgMainStageRoutes);
   // inject cfgMainStageRoutes dependencies
   cfgMainStageRoutes.$inject = ['$routeProvider', 'routeStates'];

   // route config function configuring the passed routeStates to $routeProvider
   function cfgMainStageRoutes($routeProvider, routeStates) {

    $routeProvider
         .when(routeStates.homeState.url, routeStates.homeState)
        . when(routeStates.profileState.url, routeStates.profileState)
        . when(routeStates.dashboardState.url, routeStates.dashboardState)
        . when(routeStates.d3scenario1State.url, routeStates.d3scenario1State);

   }


})();
