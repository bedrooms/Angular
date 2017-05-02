var app = angular.module('testAngularSiteApp', '');

app.controller('citiesServicingCtrl', function (NgMap) {
    var vm = this;

    vm.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4QNL4MDtqCb0ZYZ2bmr_CAdpbhTKh628";

    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
        vm.getLA();
        vm.getInland();
    });



    vm.ie = [
        { name: 'Riverside', loc: '33.952261, -117.397470' },
        { name: 'Corona', loc: '33.874729, -117.566932' },
        { name: 'Norco', loc: '33.931278, -117.549283' },
        { name: 'Lake Elsinore', loc: '33.668475, -117.329445' },
        { name: 'Chino Hills', loc: '33.968516, -117.716187' },
        { name: 'Ontario', loc: '34.063733, -117.650969' },
        { name: 'Temecula', loc: '33.493779, -117.146621' },
        { name: 'Perris', loc: '33.781986, -117.230432' },
        { name: 'Mira Loma', loc: '33.984582, -117.515966' }
    ];

    vm.ie.center = '33.781986, -117.500';


    vm.la = [
        { name: 'City of Industry', loc: '34.0197335, -117.9586754' },
        { name: 'Waltnut', loc: '34.0202894, -117.86533859999997' },
        { name: 'Pomona', loc: '34.055103, -117.7499909' },
        { name: 'Whittier', loc: '33.9791793, -118.03284400000001' },
        { name: 'Pico Rivera', loc: '33.98306880000001,-118.09673499999997' },
        { name: 'Montebello', loc: '34.0165053,-118.11375350000003' },
        { name: 'City of Commerce', loc: '34.0005691,-118.15979290000001' },
        { name: 'Vernon', loc: '34.00390300000001,-118.230073' },
        { name: 'Downey', loc: '33.94010879999999,-118.13315929999999' },
        { name: 'Maywood', loc: '33.9866807,-118.18534899999997' },
        { name: 'Norwalk', loc: '33.9022367,-118.08173299999999' }
    ];

    vm.la.center = '33.9022367,-118.08173299999999';    

    vm.getInland = function () {
        vm.locations = vm.ie;
        vm.locations.center = vm.ie.center;
    };

     vm.getLA = function () {
        vm.locations = vm.la;
        vm.locations.center = vm.la.center;
    };



});