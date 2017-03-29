
var app = angular.module('testAngularSiteApp', '');

app.controller('sessionLogInCtrl',['$rootScope','Myserv' , function ($rootScope, Myserv)
{   
  var vm = this;
  $rootScope.Admin = true; 
  $rootScope.Home = false; 
}]);