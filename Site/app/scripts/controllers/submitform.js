var app = angular.module('testAngularSiteApp', '');

app.controller('submitFormCtrl',['$scope','$http','$filter', 'Myserv' , function ($scope, $http, $filter, Myserv)
{   
  var vm = this;

  vm.applicationData = {
        name: '',
        mail: '',
        phone : '',
        state : '',
        city : '',
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

    vm.saveApplication = function(idJobOffer){
        Myserv.saveJobApplication(
            vm.applicationData.name, 
            vm.applicationData.mail, 
            vm.applicationData.phone, 
            vm.applicationData.state, 
            vm.applicationData.city, 
            vm.applicationData.resumeCV, 
            idJobOffer).then(function(response){
        vm.applicationSuccess = response.data.saveJobOfferApplicationResult;
        },
        function(response) { // optional
             vm.applicationSuccess = response.data.saveJobOfferApplicationResult;
            }
        );
  }


  
}]);
  