(function(){

	'use strict';

	angular.module('customFilters', [])
    .filter('wordFilter', function() {

        return function(items) {

            var result = [],
                regExps = [],
                args = Array.from(arguments),
                keys = args[1];


            regExps.length = keys.length;

            for(let i = 2; i < args.length; ++i) {

                if( args[i] ) regExps[i - 2] = new RegExp(args[i], 'i' );

            }
            

            if( regExps.length ) {

                for(let i = 0; i < items.length; ++i) {

                    let matches = true;

                    for(let j = 0; j < regExps.length; ++j) {

                        if( regExps[j] ) {

                            if( !regExps[j].test(items[i][keys[j]]) ) {

                                matches = false;
                                break;

                            }

                        }

                    }

                    if( matches ) result.push(items[i]);

                }

                return result;

            } else {

                return items;

            }

        }

    });


}());
