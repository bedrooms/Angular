
(function () {

angular.module('app.services', [])
.service('Myserv', Myserv);

Myserv.$inject = ['$http'];

function Myserv($http) {
    var service = {
        getInfo: getInfo,
        getpositionsOffer : getpositionsOffer
    };

        return service;
            function getInfo() {
                return $http({
                method:'GET',
                url:'http://181.54.45.243/HRStaffingService/HRAPISevice.svc/GetJobsOffer'
                        });
                    }
       
            function getpositionsOffer() {
                return $http({
                method:'GET',
                url:'http://181.54.45.243/HRStaffingService/HRAPISevice.svc/GetPositionsOffer'
                        });
                    }
    }
})();