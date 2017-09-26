angular.module('myApp.addCustomerModal', [])
    .directive('addCustomerModal', [function() {
        'use strict';
        return {
            restrict: 'A',
            templateUrl: '../modal/addCustomerModal.html',
            link: function(scope) {}
        }
    }]);
