'use strict';

/**
 * @ngdoc function
 * @name testAngularSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularSiteApp
 */
var app = angular.module('testAngularSiteApp', '');

app.controller('MainCtrl',function ($scope, $http)
{
    
    $http.get({
      url:'http://localhost:54491/Service1.svc/GetJobsOffer',
      method:'GET'
    }).then(function successCallback(response) {
        $scope.authors = response.data;
    });

    
     
});
  
