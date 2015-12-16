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

  DashboardCtrl.$inject = ['$scope','$filter'];
      /* @ngInject */
  function DashboardCtrl($scope, $filter) {

     var vm          = this;
     var openKey     = '';
     vm.viewState    = 'DashboardCtrl';
     vm.dropContent  = [];

     //while I could use a and associated array of key pairs, it is recommmend that arrays
     //should be base on numerical indexes


     vm.dropContent[0] =  { index:0, key:'overview', open:false, mastView:false};
     vm.dropContent[1] =  { index:1, key:'pollination', open:false, mastView:false};
     vm.dropContent[2] =  { index:2, key:'formation', open:false, mastView:false};
     vm.dropContent[3] =  { index:3, key:'germination', open:false, mastView:false};

     function updateOpenKey(key){
       var currentKey = openKey;
       angular.forEach( vm.dropContent, function(item){
            if(item.key === key && !item.open) {
                item.open = true;
                openKey = key;
                console.log("item.key ="+item.key +" OPEN =",item);
            }
            if(item.key === currentKey && item.open) {
                item.open = false;
                console.log("item.key ="+item.key +" CLOSE =",item);
            }
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
        });

     }

     vm.viewContentClick = function(event){
       //enforce toggle state between all reveavalbe contents clicks
       console.log(event.target.id);
       if(openKey != event.target.id){
             updateOpenKey(event.target.id);
       }
     };


     //initialize first droppable content
     updateOpenKey('overview');

   }

})();
