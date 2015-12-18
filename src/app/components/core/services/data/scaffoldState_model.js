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
                 scaffoldingRemoteServices.getDashBoard(DASHBOARD_ENDPOINT).then(
                    function(result){
                       _dashboardData = result;
                       dataDf.resolve(_dashboardData);
                    }
                 );
                 return dataDf.promise;
            }else{
                 return _dashboardData;
            }

        }
    }

}());