(function(){

	'use strict';

	angular.module('pagination', ['usersListModule'])
    .controller('paginationController', function() {

        var vm = this;

        this.maxPages = '10';
        this.currentPageIndex = 1;
        this.availableIndices;
        this.isOn = true;

    })
    .directive('paginationPageList', function() {

        return {

            restict : 'E',
            templateUrl : 'pagination-page-list.template.html',

        }

    })
	.filter('paginationFilter', function() {

        return function(pagesList, isOn, currentPage, maxUsersPerPage) {

            if( isOn ) {

                var result = [],
                    begin = (currentPage - 1) * maxUsersPerPage - 1,
                    end = currentPage * maxUsersPerPage;

                for(var i = begin; i < end && pagesList[i]; ++i) {

                    result.push( pagesList[i] );

                }

                return result;

            } else {

                return [];

            }

        }

    });


}());
