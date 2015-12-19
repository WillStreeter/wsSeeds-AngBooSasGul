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
            /* */
            if(!_dashboardData){
                 var dataDf = $q.defer();
                 scaffoldingRemoteServices.getDashBoard(DASHBOARD_ENDPOINT).then(
                    function(result){
                       _dashboardData = result;
                       dataDf.resolve(_dashboardData);
                    }
                 );
                 return dataDf.promise;
            }else{
                 //return $q.when( _dashboardData );    // angular 1.2+
                 return $q.resolve(_dashboardData);
            }

        }
    }

}());