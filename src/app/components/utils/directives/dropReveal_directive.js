
(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name wsSeed.user.module:cfgUserAccountRoute
     *
     * @requires ($routeProvider)
     * @propertyOf wsSeed.user.module
     *
     * @description
     * State definitions and configuration for the user module
     */


    angular
        .module('wsSeed.utilDirectives.module')
            .directive('dropreveal', function () {
                return {
                    restrict:'C',
                    scope:{ },
                    compile: function (element, attr) {
                        // wrap tag
                        var contents = element.html();
                        element.html('<div class="revealable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

                        return function postLink(scope, element, attrs) {
                            // default properties
                            attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                            attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                            element.css({
                                'overflow': 'hidden',
                                'height': '0px',
                                'transitionProperty': 'height',
                                'transitionDuration': attrs.duration,
                                'transitionTimingFunction': attrs.easing
                            });
                        };
                    }
                };
            });

})();