var app = angular.module('testAngularSiteApp', '');

app.controller('JobsCtrl',function ($scope, $rootScope, $http, $mdDialog)
{    
    $http.get('http://localhost:54491/Service1.svc/GetJobsOffer'    
    ).then(function successCallback(response) {
        $rootScope.jobs = response.data.getAllJobsResult;
    });

    $scope.showAdvanced = function(ev) {
        $scope.Alpha = $rootScope.jobs[0];
    $mdDialog.show({
        controller: DialogController,
      templateUrl: 'views/dialogtmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };

});
  