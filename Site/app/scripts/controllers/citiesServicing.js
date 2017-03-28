var app = angular.module('testAngularSiteApp', '');

app.controller('citiesServicingCtrl', function(NgMap) {
    var vm = this;

    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0xCoTLYO_cu9-hMIGlcuLLcVnIzps7tY";
    
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
});