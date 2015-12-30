
(function(){

'use strict';

    describe('DashboardCtrl Controller Test', function () {
      beforeEach( module('wsSeed.mainStage.module'));
      var controller = null;
      var scope  = null;
      var routeParams= null;
      var dashboardData =null;


      beforeEach(inject(function ($controller, $rootScope) {
          scope = $rootScope.$new();
          controller = $controller;
          dashboardData  = JSON.parse('{"dashboard": [  {"index":0, "key":"overview"},'+
                                                    '{"index":1, "key":"polliantion"},'+
                                                    '{"index":2, "key":"formation"},'+
                                                    '{"index":3, "key":"germination"}]}');
      }));

      it('DashboardCtrl vm with test is working', function () {
        var vm = controller('DashboardCtrl', { $scope: scope, routeParams:routeParams, dashboardData:dashboardData });
        expect(vm.viewState).toBe('DashboardCtrl');
      });



      it('DashboardCtrl resolve JSON data to Array is working', function () {
        var vm = controller('DashboardCtrl', { $scope: scope, routeParams:routeParams, dashboardData:dashboardData});
        expect(vm.dropContent.length).toBe(4);
      });

    });
})();