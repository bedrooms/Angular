
var app = angular.module('testAngularSiteApp', '');

app.controller('JobsCtrl',['$scope','Myserv' , function ($scope, Myserv)
{   
  var vm = this;

  Myserv.getInfo().then(function(response){
    vm.jobs = response.data.getAllJobsResult;
  });     

  vm.selectJob = function(idJob){
    vm.selectedJob =  vm.jobs[idJob];
  }
}]);
  