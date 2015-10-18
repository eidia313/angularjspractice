'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];

  $scope.name = "Hello World!!"; // A property of this controller
});

// phonecatApp.controller('nameOfController', function($scope){ //The argument that gets passed should always be named $SCOPE
//   $scope.myName = "Kamlesh Shrestha";
// });// This defines controller