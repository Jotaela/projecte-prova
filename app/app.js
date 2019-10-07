'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'home',
    'paisos',
    'cerveza',
    'ui.router',
    'ngMaterial'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: './home/home.template.html',
            controller: 'HomeController'

        });
        $stateProvider.state('paisos', {
            url: '/paisos',
            templateUrl: './paisos/paisos.template.html',
            controller: 'PaisosController'

        });
        $stateProvider.state('cerveza', {
            url: '/cerveza',
            templateUrl: './cerveza/cerveza.template.html',
            controller: 'CervezaController'

        });
    $urlRouterProvider.otherwise('/home');
    });
