(function() {
  'use strict';

// dscaffoldState_Model
angular
    .module('wsSeed.app.core.module')
    .factory('scaffoldStateModel', scaffoldStateModel);

    scaffoldStateModel.$inject = ['scaffoldingRemoteServices'];

    function scaffoldStateModel(scaffoldingRemoteServices){

        var DASHBOARD_ENDPOINT = '/assets/remote-data/dasboard_layout.json';

        var _dashboardData;

        var services = {
            getDashBoardData: getDashBoardData,
            getEndPoint: getEndPoint
        };
        return services;

        function getEndPoint(){
              return DASHBOARD_ENDPOINT;
        }
        function getDashBoardData() {
            /* */
            if(!_dashboardData){
              return scaffoldingRemoteServices.getDashBoard(DASHBOARD_ENDPOINT).then(
                 function(result){
                        console.log('scaffoldingRemoteServices result=',result);
                     if(result){
                        console.log(result);
                     }else{
                       _dashboardData = result;
                     }
                 });
            }else{
               return _dashboardData;
            }

        }
    }

}());