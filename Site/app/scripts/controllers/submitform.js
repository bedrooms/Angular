var app = angular.module('testAngularSiteApp', '');

app.controller('submitFormCtrl',['$scope','$http','$filter' , function ($scope, $http, $filter)
{   
  var vm = this;

 
    $http.get('jsonRepo/states.json').then(function(data) {
        vm.statesUS = data.data;
    });
    
    $http.get('jsonRepo/cities.json').then(function(data) {
        vm.citiesUS = data.data;
    });
    
    vm.getFilterCities = function(stateId){
        vm.filterCities = ($filter('filter')(vm.citiesUS, {stateName: stateId}));
    };


  
}]);
  