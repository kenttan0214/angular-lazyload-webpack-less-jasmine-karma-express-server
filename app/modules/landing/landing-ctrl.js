'use strict';
module.exports = function(app) {
    app.controller('LandingCtrl', ['$scope', function($scope) {
    	$scope.calculation = calculation;

    	function calculation(num1, num2) {
    		return num1 + num2;
    	}
    }]);
    return app;
}