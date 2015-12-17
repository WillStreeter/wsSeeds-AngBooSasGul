
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

  angular
  .module('wsSeed.mainStage.module')
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
          reloadOnSearch:false,
          templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
          controller: 'DashboardCtrl',
          controllerAs:'vm',
          resolve:{
                 dashboardData:scaffoldStateModelService
           }
        },
         dashboardSeedlingState: {
              name: 'dashboardSeedling',
              url: '/dashboard/:seedling',
              reloadOnSearch:false,
              templateUrl: 'app/staging/dashboard/dashboard.tpl.html',
              controller: 'DashboardCtrl',
              controllerAs:'vm'
         }
      })
    .config(cfgMainStageRoutes)

    function scaffoldStateModelService(scaffoldStateModel){
      var reulst =scaffoldStateModel.getDashBoardData();
      console.log("result =="+reulst);
      return reulst;
    }


   // inject cfgMainStageRoutes dependencies
     cfgMainStageRoutes.$inject = ['$routeProvider', 'routeStates','$locationProvider'];

   // route config function configuring the passed routeStates to $routeProvider
   function cfgMainStageRoutes($routeProvider, routeStates, $locationProvider) {

             //console.log(scaffoldStateModel.service.getEndPoint())
            $routeProvider
                 .when(routeStates.homeState.url, routeStates.homeState)
                . when(routeStates.profileState.url, routeStates.profileState)
                . when(routeStates.dashboardState.url, routeStates.dashboardState)
                . when(routeStates.dashboardSeedlingState.url, routeStates.dashboardSeedlingState);

                 $locationProvider.html5Mode(true);


   }


})();
