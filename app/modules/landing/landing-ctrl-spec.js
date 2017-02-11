'use strict';
describe('test landing controller', function() {
    var app = angular.module('kent.app.landing', []);
    var landingCtrl = require('./landing-ctrl')(app);
    var $scope = {};

    beforeEach(angular.mock.module(app.name));

    beforeEach(inject(function($controller) {
        var controller = $controller('LandingCtrl', {
            $scope: $scope
        });
    }));

    it('should be three', function() {
        expect($scope.calculation(1, 2)).toEqual(3);
    });
});