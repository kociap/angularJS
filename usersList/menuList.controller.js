(function(){

	'use strict';

	angular.module('usersListModule')
	.controller('menuList', function() {

		this.categories = [
		{
			name : 'Main Page',
			sref : 'mainPage',
		},
		{
			name : 'Users list',
			sref : 'usersList-display',
		},
		{
			name : 'Add user',
			sref : 'usersList-add',
		}
		];

	});

}());
