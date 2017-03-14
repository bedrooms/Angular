var app = angular.module('testAngularSiteApp', '');

app.controller('positionsOfferCtrl',['$scope','Myserv' , function ($scope, Myserv)
{   
  var vm = this;

  Myserv.getpositionsOffer().then(function(response){
    vm.positionsOffer = response.data.getAllPositionsOfferResult;
  });  
  
}]);