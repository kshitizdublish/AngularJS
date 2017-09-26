angular.module('myApp.commonDirectives', [])
    .directive('directives', function() {
        'use strict';
        return {
            restrict: 'EA',
            scope: {
                personData: '=',
                passingMessage: '='
            },
            templateUrl: '/commonDirectives/directive1.html',
            controller: function($scope) {
                $scope.personName = $scope.personData.name;
                $scope.personAge = $scope.personData.age;
                $scope.personGender = $scope.personData.gender;
                $scope.$on('eventBroadcastedName', function(event, data) {
                    $scope.hello  = data;
                });
            }
        }
    });
