(function() {
  'use strict';

// dscaffoldState_Model
angular
    .module('wsSeed.app.core.module')
    .factory('scaffoldStateModel', scaffoldStateModel);

    scaffoldStateModel.$inject = ['$q','scaffoldingRemoteServices'];

    function scaffoldStateModel($q, scaffoldingRemoteServices){

        var DASHBOARD_ENDPOINT = '/assets/remote-data/dasboard_layout.json';

        var _dashboardData;

        var services = {
            getDashBoardData: getDashBoardData
        };

        return services;

        function getDashBoardData() {
            var dataDf = $q.defer();
            /* */
            if(!_dashboardData){
                var dataDf = $q.defer();
                 scaffoldingRemoteServices.getDashBoard(DASHBOARD_ENDPOINT).then(
                    function(result){
                        console.log('scaffoldingRemoteServices result=',result);
                       _dashboardData = result;
                       dataDf.resolve(_dashboardData);
                 });
                 return dataDf.promise;
            }else{
               return dataDf.resolve(_dashboardData);
            }

        }
    }

}());