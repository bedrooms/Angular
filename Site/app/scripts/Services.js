
(function () {

angular.module('app.services', [])
.service('Myserv', Myserv);

Myserv.$inject = ['$http'];
//var urlEndpoint = 'http://181.54.45.243/HRStaffingService/HRAPISevice.svc/';
var urlEndpoint = 'http://50.63.165.189/HRSService/HRAPISevice.svc/';
var saveResponse;

function Myserv($http) {
    var service = {
        getInfo: getInfo,
        getpositionsOffer : getpositionsOffer,
        getAllEmployees : getAllEmployees,
        getAllCoServices : getAllCoServices,
        saveJobApplication : saveJobApplication
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
            function saveJobApplication(name, mail, phone, state, city, resumeCV, idJobOffer) {       
                   return $http({
                        method: 'GET',
                        url: urlEndpoint + 'saveApplication/',
                        params:{
                            name: name,
                            mail: mail,
                            phone : phone,
                            state : state,
                            city : city,
                            resumeCV : resumeCV,
                            idJobOffer : idJobOffer
                        }
                    });

                }
    }
})();