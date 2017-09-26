'use strict';

angular.module('myApp.customerDetails', [
    'myApp.addCustomerModal'
    ])
    .controller('customerDetailCtrl', function($scope, $http) {
        $scope.heading = 'Customer Detail';
        $scope.edit = 'Edit Details';
        $scope.delete = 'Delete Customer';

        // Use of outside JSON file for showing data
        /*$http.get('customerDetails/customersJSON.html')
            .success(function(response) {
                $scope.customers = response;
        });*/

        $scope.allCustomers = [
            {
                "customer_id": 1,
                "firstName": "John",
                "lastName": "Carter",
                "age": 35,
                "gender": "Male",
                "mobileNumber":6465554567
            }
        ];

        $scope.saveNewCustomer = function() {
            var customer = {
                customer_id: $scope.allCustomers.length + 1,
                firstName: $scope.fName,
                lastName: $scope.lName,
                age: $scope.age,
                gender: $scope.gender,
                mobileNumber: $scope.mobileNumber
            };
            $scope.allCustomers.push(customer);
            $scope.fName = null;
            $scope.lName = null;
            $scope.age = null;
            $scope.gender = null;
            $scope.mobileNumber = null;
        }

        $scope.editDetails = function(customer) {
            $scope.customer = customer;
        }

        $scope.updateCustomer = function() {
            return;
        }

        $scope.deleteCustomer = function(customer) {
            $scope.allCustomers.pop(customer);
            $scope.customer = null;
        }
    });
