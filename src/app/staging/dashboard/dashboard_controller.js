(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc controller
   * @name wsSeed.coreModule.controller:CoreBaseCtrl
   *
   * @description
   * Interface to login a registered user(
   */
  angular
  .module('wsSeed.mainStage.module')

  .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['$scope','$routeParams','dashboardData'];
      /* @ngInject */
  function DashboardCtrl($scope, $routeParams, dashboardData) {
    console.log('DashboardCtrl   dashboardData =', dashboardData)
     var vm          = this;
     var openKey     = 'overview';  //default
     vm.viewState    = 'DashboardCtrl';
     vm.dropContent  = angular.fromJson(dashboardData.dashboard);

     angular.forEach(vm.dropContent, function(item, key){
             item.open = false;
             item.mastVeiw = false;
     });

    console.log('DashboardCtrl     vm.dropContent =',   vm.dropContent);
     //while I could use a and associated array of key pairs, it is recommmend that arrays
     //should be base on numerical indexes

     function updateMastView(){
            switch(openKey){
                case 'overview':
                    vm.dropContent[0].mastView = false;
                    vm.dropContent[1].mastView = false;
                    vm.dropContent[2].mastView = false;
                    vm.dropContent[3].mastView = false;
                    break;
                case 'pollination':
                    vm.dropContent[0].mastView = true;
                    vm.dropContent[1].mastView = false;
                    vm.dropContent[2].mastView = false;
                    vm.dropContent[3].mastView = false;
                    break;
                case 'formation':
                    vm.dropContent[0].mastView = true;
                    vm.dropContent[1].mastView = true;
                    vm.dropContent[2].mastView = false;
                    vm.dropContent[3].mastView = false;

                    break;
                case 'germination':
                    vm.dropContent[0].mastView = true;
                    vm.dropContent[1].mastView = true;
                    vm.dropContent[2].mastView = true;
                    vm.dropContent[3].mastView = false;
                    break;


            }
     }

     function updateOpenKey(key){
       var currentKey = openKey;
       angular.forEach( vm.dropContent, function(item){
            console.log("vm.dropContent item =", item);
            if(item.key === key && !item.open) {
                item.open = true;
                openKey = key;
               // console.log("item.key ="+item.key +" OPEN =",item);
            }else if (item.key === currentKey && item.open) {
                item.open = false;
                //console.log("item.key ="+item.key +" CLOSE =",item);
            }
        });
        updateMastView();
     }


     $scope.$on('$routeUpdate', function () {
          //console.log("$routeParams.seedling"+$routeParams.seedling)
         var newVeiw = $routeParams.seedling=== undefined?'overview':$routeParams.seedling;
         if(newVeiw!= openKey){
             updateOpenKey(newVeiw);
         }
     });

     //initialize first droppable content
     if($routeParams.seedling != undefined){
         openKey = $routeParams.seedling;
         updateOpenKey(openKey);
     }else{
         updateOpenKey(openKey);
     }

   }

})();
