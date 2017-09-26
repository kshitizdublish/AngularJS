'use strict';

angular.module('myApp.develop', ['myApp.commonDirectives'])
    .controller('developCtrl', function($scope) {
        $scope.strings = [
            'Use of ng-model and ng-bind (two way binding)',
            'Use of ng-repeat',
            'Use of filters',
            'Show alphabatically',
            'Use of Customized Filter',
            'One-way binding Use'
        ];

        $scope.userName = 'Kshitiz Dublish'
        $scope.countries = ["India", "France", "Australia", "Russia", "Brazil", "Germany"];
        $scope.cars = ['Porsche', 'Audi', 'Mercedes', 'BMW'];
        $scope.count = 1;
        $scope.counter = 1;
        $scope.showSpan = function() {
            $scope.buttonClicked = !$scope.buttonClicked ;
        };
        $scope.showDirective = function() {
            $scope.directiveShow = true;
        };
        $scope.person = {
            name: 'Kshitiz',
            age: '26',
            gender: 'male'
        };
    })
    .directive('myDirective', function() {
        'use strict';
        return {
            restrict: 'A',
            templateUrl: '/develop/myDirective.html'
        }
    })
    .filter('appendStringFilter', function() {
        return function(input) {
          return input + ' + nice car';
        };
    });