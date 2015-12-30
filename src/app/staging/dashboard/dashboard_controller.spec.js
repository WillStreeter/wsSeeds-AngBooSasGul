
(function(){

'use strict';

    describe('DashboardCtrl Controller Test', function () {
      beforeEach( module('wsSeed.mainStage.module'));
      var controller = null;
      var scope  = null;
      var routeParams= null;
      var dashboardData =null;


      beforeEach(inject(function ($controller, $rootScope) {
          scope          = $rootScope.$new();
          controller     = $controller;
          routeParams    = {seedling:'germination'};
          dashboardData  = JSON.parse('{"dashboard": [  {"index":0, "key":"overview"},'+
                                                       '{"index":1, "key":"polliantion"},'+
                                                       '{"index":2, "key":"formation"},'+
                                                       '{"index":3, "key":"germination"}]}');
      }));

      it('DashboardCtrl vm with test is working', function () {
        var vm = controller('DashboardCtrl', { $scope: scope, $routeParams:routeParams, dashboardData:dashboardData });
        expect(vm.viewState).toBe('DashboardCtrl');
      });

      it('DashboardCtrl resolve JSON data to Array is working', function () {
        var vm = controller('DashboardCtrl', { $scope: scope, $routeParams:routeParams, dashboardData:dashboardData});
        expect(vm.dropContent.length).toBe(4);
      });

      it('DashboardCtrl inject $routeParams sett correctly toggles appropriate states',  function () {
            var vm = controller('DashboardCtrl', { $scope: scope, $routeParams:routeParams, dashboardData:dashboardData});
            var index = -1;
            for (var i = 0; i < vm.dropContent.length; i++) {
                if(vm.dropContent[i].key === routeParams.seedling){
                    index = i;
                }
                switch(index){
                       case 0:
                          expect(vm.dropContent[i].mastView).toBeFalsy();
                       break;
                       case 1:
                          if(i===0){
                            expect(vm.dropContent[i].mastView).toBeTruthy();
                          }
                       break;
                       case 2:
                           if(i <2){
                              expect(vm.dropContent[i].mastView).toBeTruthy();
                           }else{
                              expect(vm.dropContent[i].mastView).toBeFalsy();
                           }
                       break;
                       case 3:
                           if(i <3){
                              expect(vm.dropContent[i].mastView).toBeTruthy();
                           }else{
                              expect(vm.dropContent[i].mastView).toBeFalsy();
                           }
                       break;
                }
            }
      });

    });
})();