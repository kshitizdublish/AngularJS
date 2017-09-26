angular.module('myApp.BroadCastUse', [])
    .controller('broadCastUseCtrl', function($scope) {
        $scope.$on('eventBroadcastedName', function(event, data) {
            $scope.broadCastMsg = data;
        });
        $scope.emitEvent = function() {
            $scope.$emit('emitMessage', this.emitMessage);
        };
    });