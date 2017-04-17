
var app = angular.module('testAngularSiteApp', '');

app.controller('JobsCtrl',['$rootScope','Myserv','$location', '$uibModal', function ($rootScope, Myserv, $location, $uibModal)
{   
  var vm = this;

  Myserv.getInfo().then(function(response){
    vm.jobs = response.data.getAllJobsResult;
  });     

  function selectJob(idJob){
    $rootScope.selectedJob =  vm.jobs[idJob];
  }

  vm.redirectSubmit = function(){
    cancel();
    $location.path('submitForm');
  }

  
    vm.open = function (idJob) {  
      selectJob(idJob);
    $rootScope.modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal.html',
      controller: "JobsCtrl as vm",
    });
  };

  function cancel () {
    $rootScope.modalInstance.close();
  };


}]);
  