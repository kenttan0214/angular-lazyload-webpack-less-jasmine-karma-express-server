'use strict';
var app = angular.module('kent.app.landing.home', []);

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('landing.home', {
            url: "/",
            views: {
                body: {
                    controller: "HomeCtrl",
                    templateProvider: function($q) {
                        return $q(function(resolve) {
                            require.ensure([], function() {
                                return resolve(require('./home.html'));
                            });
                        });
                    }
                }
            },
            resolve: {
                loadModules: function($q, lazyLoad) {
                    return $q(function(resolve) {
                        require.ensure([], function() {
                            var homeCtrl = require('./home-ctrl')(app);
                            lazyLoad.bootstrapComponents(resolve, [homeCtrl]);
                        });
                    });
                }
            }
        });
}]);