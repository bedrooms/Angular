'use strict';

/**
 * @ngdoc overview
 * @name testAngularSiteApp
 * @description
 * # testAngularSiteApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  // .config(function ($routeProvider, $locationProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'app/views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'app/views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });

  //     $locationProvider.html5Mode(true);
  // });  

  .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/main',         
            templateUrl: 'views/main.html',
            controller: 'MainCtrl as vm'
           
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
             url: '/about',           
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl as vm'
           
        });

        
        
});

