import angular = require('angular');

let ngModule: angular.IModule = angular.module('demo.routes', ['ui.router']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('Home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl as homeCtrl',
            showWhenLoggedIn: true
        })
        .state('Todo', {
            url: '/todo',
            templateUrl: 'app/todolist/todolist.html',
            controller: 'TodolistCtrl as todolistCtrl',
            showWhenLoggedIn: true
        })
        .state('Register', {
            url: '/register',
            templateUrl: 'app/register/register.html',
            controller: 'RegisterCtrl as registerCtrl',
            showWhenLoggedIn: false
        })
        .state('Login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl as loginCtrl',
            showWhenLoggedIn: false
        });

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/home');
    }]);
