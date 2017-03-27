
/**
 * @ngdoc function
 * @name testAngularSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularSiteApp
 */
var app = angular.module('testAngularSiteApp', '');

app.controller('MainCtrl',function ()
{    
    var vm = this;
    vm.myInterval = 3000;
    vm.slides = [
        {
        image: 'https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg'
        },
        {
        image: 'https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg'
        },
        {
        image: 'https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg'
        },
        {
        image: 'https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg'
        }
    ];
   
});
  
