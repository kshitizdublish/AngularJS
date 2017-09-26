'use strict';

// Declare app level module which depends on views and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.contactUs',
  'myApp.develop',
  'myApp.servicesUse',
  'myApp.customerDetails',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
        // route for the login page
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        })

        // route for the home page
        .when('/home', {
            templateUrl : 'home/home.html',
            controller  : 'homeCtrl'
        })

        // route for the contact page
        .when('/contactUs', {
            templateUrl : 'contactUs/contactUs.html',
            controller  : 'contactUsCtrl'
        })

        // route for the develop page
        .when('/develop', {
            templateUrl: 'develop/develop.html',
            controller: 'developCtrl'
        })
        // route for the service page
        .when('/service', {
            templateUrl: 'servicesUse/serviceUse.html',
            controller: 'serviceUseCtrl',
            controllerAs: 'svcCtrl'
        })
        // route for the customer detail page
        .when('/customerDetail', {
            templateUrl: 'customerDetails/customerDetail.html',
            controller: 'customerDetailCtrl',
            controllerAs: 'custDtlCtrl'
        })

        .otherwise('/home');
}]);
