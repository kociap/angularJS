(function(){

	'use strict';

	angular.module('usersListModule', ['ui.router', 'utility', 'customFilters'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        // $locationProvider.html5Mode(true);

        $stateProvider
        .state('mainPage', {

        	url : 'mainPage',
        	templateUrl : 'mainPage.template.html',

        })
        .state('usersList-display', {

        	url : 'users-list',
        	templateUrl : 'users-list.template.html',

        	controller : 'usersList',
        	controllerAs : 'usersList',

        })
        .state('usersList-add', {

        	url : 'word-list/category/people',
        	templateUrl : 'add-user.template.html',

        	controller : 'editUsersData',
        	controllerAs : 'editUsersData',

        });

        $urlRouterProvider.otherwise('mainPage');

    }]);

}());
