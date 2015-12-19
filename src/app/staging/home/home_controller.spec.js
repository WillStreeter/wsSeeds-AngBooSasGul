(function(){
    describe('HomeCtrl Controller Test', function () {
      beforeEach( module('wsSeed.mainStage.module'));
      var controller = null;
      var scope  = null;


      beforeEach(inject(function ($controller, $rootScope) {
          scope = $rootScope.$new();
          controller = $controller;
      }));

      it('HomeCtrl vm with test is working', function () {
        var vm = controller('HomeCtrl', { $scope: scope });
        expect(vm.viewState).toBe('HomeCtrl');
      });


    });
})();