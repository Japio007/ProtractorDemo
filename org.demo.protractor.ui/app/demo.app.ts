/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="angular-sanitize"/>

/// <amd-dependency path="./app.routes"/>

import angular = require('angular');
import HomeCtrl = require('./home/home.ctrl');
import LoginCtrl = require('./login/login.ctrl');
import Navbar = require('./navbar/navbar.component');
import UserService = require('./blocks/user.service');

let applicationName = 'protractor-ng1-demo';
let app: angular.IModule = angular.module(applicationName, ['demo.routes']);

app.controller('HomeCtrl', HomeCtrl);
app.controller('LoginCtrl', LoginCtrl);
app.directive('navbar', [Navbar['Navbar']]);
app.service('userService', UserService['UserService']);

// initialize bootstrap
angular.bootstrap(document, [applicationName]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);
