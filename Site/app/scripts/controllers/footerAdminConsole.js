var app = angular.module('testAngularSiteApp', '');

app.controller('footerAdminConsoleCtrl',['$scope','Myserv' , function ($scope, Myserv)
{       
  var vm = this;
   $rootScope.footerAdmin = true; 
   $rootScope.footerTmpl = false; 
}]);
  