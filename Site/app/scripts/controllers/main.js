
/**
 * @ngdoc function
 * @name testAngularSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularSiteApp
 */
var app = angular.module('testAngularSiteApp', '');

app.controller('MainCtrl',['Myserv',function (Myserv)
{    
    var vm = this; 

      Myserv.getAllEmployees().then(function(response){
            vm.employees = response.data.getAllEmployeesResult;
        }); 

      Myserv.getAllCoServices().then(function(response){
            vm.companyServices = response.data.GetAllCoServicesResult;
        }); 

}]);
  
