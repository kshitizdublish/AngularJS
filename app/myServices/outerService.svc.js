angular.module('MyOuterServices', [])
    .service('OuterService', function() {
    	this.outerSvcCredentials = function() {
        	return 'outerService/outerService@1';
    	}
    });