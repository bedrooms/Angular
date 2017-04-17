
var app = angular.module('testAngularSiteApp', '');

app.controller('JobsCtrl',['$scope','Myserv','$location' , function ($scope, Myserv, $location)
{   
  var vm = this;

  Myserv.getInfo().then(function(response){
    vm.jobs = response.data.getAllJobsResult;
  });     

  vm.selectJob = function(idJob){
    vm.selectedJob =  vm.jobs[idJob];
  }

  vm.redirectSubmit = function(){
    $location.path('submitForm');
  }
}]);
  