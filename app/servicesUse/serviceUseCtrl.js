angular.module('myApp.servicesUse', ['MyOuterServices', 'myApp.BroadCastUse'])
    .service('Innerservice', function() {
        this.innerSvcCredentials = function() {
            return 'innerService/innerService@1';
        }
    })
    .factory('credentialsFactory', function() {
        var myFacObject = {};
        myFacObject.getCredentialsFactory = function() {
            return 'factory/factory@1';
        }
        return myFacObject;
    })

    .controller('serviceUseCtrl',
        ['OuterService',
         'Innerservice',
         'credentialsFactory',
         '$scope',
         function(OuterService, Innerservice, credentialsFactory, $scope) {

        var svcCtrl = this;
        svcCtrl.heading = 'Get credentials from Controller or Service!';
        svcCtrl.getCredentials = function() {
            svcCtrl.clicked = !svcCtrl.clicked;
            svcCtrl.credentials = 'controller/controller@1';
        }
        svcCtrl.getCredentialsInSvc = function() {
            svcCtrl.inSvcCalled = !svcCtrl.inSvcCalled;
            svcCtrl.innerCredentials = Innerservice.innerSvcCredentials();
        }
        svcCtrl.getCredentialsOutSvc = function() {
            svcCtrl.outSvcCalled = !svcCtrl.outSvcCalled;
            svcCtrl.outerCredentials = OuterService.outerSvcCredentials();
        }
        svcCtrl.getFactoryCred = function() {
            svcCtrl.factoryCalled = !svcCtrl.factoryCalled;
            svcCtrl.getCredFact = credentialsFactory.getCredentialsFactory();
        }

        svcCtrl.broadcastEvent = function() {
            $scope.$broadcast('eventBroadcastedName', $scope.broadCastMessage);
        };
        $scope.$on('emitMessage', function(event, data) {
            $scope.emitMsg  = data;
        });
        $scope.personData = {
            name: "Kshitiz",
            age: "26",
            gender: "Male"
        };
        $scope.passingMsg = "PassingMessage";
    }]);
