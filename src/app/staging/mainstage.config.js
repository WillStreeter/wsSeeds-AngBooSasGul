
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
          controllerAs:'vm'
        },
        dashboardState: {
          name: 'dashboard',
          url: '/dashboard',
          templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
          controller: 'DashboardCtrl',
          controllerAs:'vm'
        },
         dashboardPollinationState: {
              name: 'dashboardPollination',
              url: '/dashboard/pollination',
              templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
              controller: 'DashboardCtrl',
              controllerAs:'vm'
         },
          dashboardFormationState: {
              name: 'dashboardFormation',
              url: '/dashboard/formation',
              templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
              controller: 'DashboardCtrl',
              controllerAs:'vm'
          },
          dashboardGerminationState: {
              name: 'dashboardGermination',
              url: '/dashboard/germination',
              templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
              controller: 'DashboardCtrl',
              controllerAs:'vm'
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
        . when(routeStates.dashboardPollinationState.url, routeStates.dashboardPollinationState)
        . when(routeStates.dashboardFormationState.url, routeStates.dashboardFormationState);

   }


})();
