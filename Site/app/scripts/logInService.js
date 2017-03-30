var app = angular.module('testAngularSiteApp', '');

app.factory("authenticationSvc", function($http, $q, $window) {
  var userInfo;

  function getUserInfo() {
    return userInfo;
  }

function login(userName, password) {
  var deferred = $q.defer();
  
    $http({
           method: 'GET',
        url: 'http://localhost:54491/HRAPISevice.svc/GetLoginUser/',
        params:{
             userName: userName,
              password: password
        }
    })
    .then(function(response) {
       userInfo = {
        lastSession: response.data.GetLoginUserAuthResult.LastSession,
        userMail: response.data.GetLoginUserAuthResult.Email,
        loginSuccess : response.data.GetLoginUserAuthResult.LoggedSuccess
      };
      $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
      deferred.resolve(userInfo);
    }, 
    function(response) { // optional
       deferred.reject(error);
    });

     return deferred.promise;
}



   
  
  

  return {
    login: login,
    getUserInfo: getUserInfo
  };
});