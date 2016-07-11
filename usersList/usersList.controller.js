(function(){

	'use strict';

	angular.module('usersListModule')
	.service('usersListData', [ '$http', '$rootScope', function($http, $rootScope) {

		var usersListData = [];

		$http.get('database.json').then(function(response) {

			usersListData.length = response.data.length;

			for(var i = 0; i < response.data.length; ++i) {

				usersListData[i] = response.data[i];

			}

		});

		$rootScope.$watch('usersListData', function(oldValue, newValue) {

			console.log(oldValue, newValue);

			$http({

				method : 'POST',
				url : 'database.json',
				headers : {
					'Content-type' : 'text/json'
				},
				data : newValue || []

			}).then(function(response) {

				console.log('Database successfully updated');

			});

		});

		return usersListData;

	}])
	.controller('editUsersData', [ 'usersListData', function(usersListData) {

		this.add = function(newUser) {

			var clone = Object.clone(newUser);

			clone.id = Date.now();

			usersListData.push( clone );

		}

		this.delete = function(id) {

			delete usersList[id];

		}

		this.edit = function(oldUser, changedUser) {

			for(var key in changedUser) {

				oldUser[key] = changedUser[key];

			}

		}

	}])
	.controller('usersList', [ 'usersListData', function(usersListData) {

		this.users = usersListData;

		this.editing = -1;

		this.changedUser = {};

	}])
	.directive('usersListFiltering', function() {

		return {

			restrict : 'E',
			templateUrl : 'users-list-filtering.template.html',

		};

	})


}());
