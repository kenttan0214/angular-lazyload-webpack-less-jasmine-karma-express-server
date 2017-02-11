'use strict';
require('./home');

var app = angular.module('kent.app.landing', ['kent.app.landing.home']);

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('landing', {
            url: "/landing",
            abstract: true,
            controller: "LandingCtrl",
            templateProvider: function($q) {
                return $q(function(resolve) {
                    require.ensure([], function() {
                        require('./landing.less');
                        return resolve(require('./landing.html'));
                    });
                });
            },
            resolve: {
                loadModules: function($q, lazyLoad) {
                    return $q(function(resolve) {
                        require.ensure([], function() {
                            var landingCtrl = require('./landing-ctrl')(app);
                            lazyLoad.bootstrapComponents(resolve, [landingCtrl]);
                        });
                    });
                }
            }
        });
}]);