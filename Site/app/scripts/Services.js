(function () {

angular.module('testAngularSiteApp', [])
.service('Myserv', Myserv);

Myserv.$inject = ['$http'];

function Myserv($http) {
    var service = {
        getInfo: getInfo
    };

return service;
    function getInfo() {
        return $http({
method:'GET',
params:{

},
url:''
        });
    }
}



})();