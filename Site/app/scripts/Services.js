
(function () {

angular.module('app.services', [])
.service('Myserv', Myserv);

Myserv.$inject = ['$http'];
//var urlEndpoint = 'http://181.54.45.243/HRStaffingService/HRAPISevice.svc/';
var urlEndpoint = 'http://localhost:54491/HRAPISevice.svc/';

function Myserv($http) {
    var service = {
        getInfo: getInfo,
        getpositionsOffer : getpositionsOffer,
        getAllEmployees : getAllEmployees,
        getAllCoServices : getAllCoServices
    };

        return service;
            function getInfo() {
                return $http({
                method:'GET',
                url: urlEndpoint + 'GetJobsOffer'
                        });
                    }
       
            function getpositionsOffer() {
                return $http({
                method:'GET',
                url: urlEndpoint + 'GetPositionsOffer'
                        });
                    }

            function getAllEmployees() {
                return $http({
                method:'GET',
                url: urlEndpoint + 'GetAllEmployees'
                        });
                    }
            function getAllCoServices() {
                return $http({
                method:'GET',
                url: urlEndpoint + 'GetAllCoServices'
                        });
                    }
    }
})();