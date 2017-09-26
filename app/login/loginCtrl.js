angular.module('myApp.login', [])
    .controller('loginCtrl', function($scope, $http) {
        $scope.loginBtn = function(uName, pswd) {
            if (uName !== undefined || pswd !== undefined) {
                $http.get('login/logincredentials.html')
                    .success(function(response) {
                        $scope.responseMsg = response;
                        $scope.status = true;
                    })
                    .error(function(response) {
                        $scope.responseMsg = response;
                        $scope.status = true;
                    })
            } else {
                $scope.status = true;
                $scope.responseMsg = 'Enter credentials';
            }
        }
        $scope.reset = function() {
            $scope.uName = '';
            $scope.pswd = '';
            $scope.status = false;
        }
    });