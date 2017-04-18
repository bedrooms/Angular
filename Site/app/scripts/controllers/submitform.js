var app = angular.module('testAngularSiteApp', '');

app.controller('submitFormCtrl',['$scope','$http','$filter', 'Myserv' , function ($scope, $http, $filter, Myserv)
{   
  var vm = this;

  vm.applicationData = {
        name: '',
        mail: '',
        phone : '',
        resumeCV : ''
  }

 
    $http.get('jsonRepo/states.json').then(function(data) {
        vm.statesUS = data.data;
    });
    
    $http.get('jsonRepo/cities.json').then(function(data) {
        vm.citiesUS = data.data;
    });
    
    vm.getFilterCities = function(stateId){
        vm.filterCities = ($filter('filter')(vm.citiesUS, {stateName: stateId}));
    };

    vm.saveApplication = function savea(idJobOffer, state, city){
        Myserv.saveJobApplication(
            vm.applicationData.name, 
            vm.applicationData.mail, 
            vm.applicationData.phone, 
            state, 
            city, 
            vm.applicationData.resumeCV, 
            idJobOffer)
            .then(function(response){
                vm.applicationSuccess = response.data.saveJobOfferApplicationResult;
                   vm.applicationData.name = '', 
                    vm.applicationData.mail = '', 
                    vm.applicationData.phone = '', 
                    vm.applicationData.resumeCV = ''
                }, 
                function(response) { // optional
                vm.applicationNotSuccess = true;
                }
                );
  }


  
}]);
  