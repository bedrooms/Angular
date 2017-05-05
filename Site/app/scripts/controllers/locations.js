var app = angular.module('testAngularSiteApp', '');



app.controller('locationsCtrl', function(NgMap) {
    var vm = this;

    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4QNL4MDtqCb0ZYZ2bmr_CAdpbhTKh628";
    
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
});