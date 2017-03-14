
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
                url:'http://localhost:54491/HRAPISevice.svc/GetJobsOffer'
                        });
                    }
       
            function getpositionsOffer() {
                return $http({
                method:'GET',
                url:'http://localhost:54491/HRAPISevice.svc/GetPositionsOffer'
                        });
                    }
    }
})();