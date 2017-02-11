'use strict';

require('./common');
require('./modules/landing');

var app = angular.module('kent.app', [
	'ngResource', 'ui.router', 'oc.lazyLoad', 
	'kent.common-services',
	'kent.app.landing'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/landing/');
}]);


// app.run(['$state', '$location', '$rootScope', function($state, $location, $rootScope) {
//     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//     });

//     $rootScope.$on('$stateChangeSuccess', function() {
//     });
// }]);

// Bootstraps app
angular.element(document).ready(function() {
    angular.bootstrap(document, ['kent.app']);
});