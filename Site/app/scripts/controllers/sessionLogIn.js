
var app = angular.module('testAngularSiteApp', '');

app.controller('sessionLogInCtrl',['$rootScope','authenticationSvc', '$location' , function ($rootScope, authenticationSvc, $location)
{   
  var vm = this;
  $rootScope.Admin = true; 
  $rootScope.Home = false;  

  vm.loggedUser = function logInUser(userName, password) {
    
      authenticationSvc.login(userName,password).then(function(response){
      vm.userLogged = response;      
        if(response.loginSuccess == true)
        {
          $location.path('adminWelcome');
        }
    });

  }

}]);

/*app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeSuccess", function(userInfo) {
    console.log(userInfo);
  });

  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
    if (eventObj.authenticated === false) {
      $location.path("/sessionLogIn");
    }
  });
}]);*/