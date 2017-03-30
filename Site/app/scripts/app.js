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
    'ui.router',
    'app.services',
    'ngMap'
  ])

  .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider  
        .state('main', {
            url: '/main',         
            templateUrl: 'views/main.html',
            controller: 'MainCtrl as vm'           
        })
     
        .state('about', {
             url: '/about',           
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl as vm'           
        })

        .state('Jobs', {
             url: '/Jobs',           
            templateUrl: 'views/Jobs.html',
            controller: 'JobsCtrl as vm'           
        })

        .state('PositionsOffer', {
             url: '/positionsOffer',           
            templateUrl: 'views/positionsOffer.html',
            controller: 'positionsOfferCtrl as vm'           
        })

         .state('locations', {
             url: '/locations',           
            templateUrl: 'views/locations.html',
            controller: 'locationsCtrl as vm'           
        })

         .state('Cities', {
            url: '/Cities',           
            templateUrl: 'views/citiesServicing.html',
            controller: 'citiesServicingCtrl as vm'           
        })

        .state('sessionLogIn', {
            url: '/sessionLogIn',           
            templateUrl: 'sessionLogIn.html',
            controller: 'sessionLogInCtrl as vm',
        })

        .state('adminWelcome', {
            url: '/adminWelcome',           
            templateUrl: 'views/adminWelcome.html',
            controller:'adminWelcomeCtrl as vm',
             resolve: {
                    auth: ["$q", "authenticationSvc", function($q, authenticationSvc) {
                    var userInfo = authenticationSvc.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                    }]           
        }            
        });
});


