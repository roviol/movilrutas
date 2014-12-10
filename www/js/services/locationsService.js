angular.module('starter').factory('LocationsService', [ '$http', function($http) {

  var locationsObj = {};
  locationsObj.savedLocations=[];


$http.get('http://54.187.171.113/rutas/puntos/').
  success(function(data, status, headers, config) {
      angular.forEach(data, function(value) {
        this.push({id: value.pk, name: value.fields.nombre, lat: value.fields.lat, lng: value.fields.lon});
      }, locationsObj.savedLocations);
  }).
  error(function(data, status, headers, config) {
      console.log("error");
  });
/*
  locationsObj.savedLocations = [
    {
      name : "Washington D.C., USA",
      lat : 38.8951100,
      lng : -77.0363700
    },
    {
      name : "London, England",
      lat : 51.500152,
      lng : -0.126236
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014
    },
    {
      name : "Moscow, Russia",
      lat : 55.752121,
      lng : 37.617664
    },
    {
      name : "Rio de Janeiro, Brazil",
      lat : -22.970722,
      lng : -43.182365
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    }

  ];
*/
  return locationsObj;

}]);