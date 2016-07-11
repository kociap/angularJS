(function(){

	'use strict';

	angular.module('mainApplication', ['ui.router', 'utility', 'customFilters', 'usersListModule','pagination'])
    .run(function() {

        (function extend() {

            Object.clone = function(object) {

                var newObject = {};

                for(var key in object) {

                    if( object.hasOwnProperty(key) ) {

                        newObject[key] = object[key];

                    }

                }

                return newObject;
            }

        }());

    });

}());
