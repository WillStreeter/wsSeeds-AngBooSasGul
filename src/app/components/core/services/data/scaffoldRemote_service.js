(function(){

  'use strict';

//scaffoldingRemote factory
angular
    .module('wsSeed.app.core.module')
    .factory('scaffoldingRemoteServices', scaffoldingRemoteServices);

    scaffoldingRemoteServices.$inject = ['$http'];

    function scaffoldingRemoteServices($http) {
        return {
            getDashBoard: getDashBoard
        };

        function getDashBoard(endPoint) {

            return $http.get(endPoint)
                .then(getDashBoardComplete)
                .catch(getDashBoardError);

            function getDashBoardComplete(response) {
                return response.data;
            }

            function getDashBoardError(error) {
                 return error;
            }
        }

    }


}());