
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
        .directive('revealToggle', revealToggle);

        function revealToggle(){
            var directive = {
                restrict: 'A',
                scope :{
                    revealState:'=?'
                },
                controller: RevealToggleCtrl,
                controllerAs: 'vm',
                link:linkFunc,
                bindToController: true

            };

            return directive;

           function linkFunc(scope, element, attr, vm) {
                var revealStateWatcher;
                var initialized = false;

                revealStateWatcher =  scope.$watch('vm.revealState', function(newValue, oldValue) {

                   if(oldValue !== newValue ||( !initialized && newValue && oldValue)){
                      initialized = true;
                      vm.doReveal();
                   }
                });

                scope.$on('$destroy', function() {
                    revealStateWatcher();
                });

           }
        }

        RevealToggleCtrl.$inject = ['$scope', '$window','$rootScope','$element', '$attrs'];

        function RevealToggleCtrl($scope, $window, $rootScope, $element, $attrs) {
                var vm = this;
                vm.doReveal = doReveal;
                $attrs.contracted = false;
                var target;
                var content;
                var started = false;

                var webKitListenerTransEnd = null;
                var mozTransitionEnded = null;
                var operaTransitonEnded = null;
                var revealElement = null;

                function transitionEnded(){
                    //be aware of other event names from other browsers vendor-prefixed
                    $rootScope.$broadcast('reveableTansitioned::revealableComplete');
                    removeTransitionListeners(revealElement);
                }

                function setUpTranstionListeners(revealElementTrans){
                    webKitListenerTransEnd = revealElementTrans.on('webkitTransitionEnd',transitionEnded);
                    mozTransitionEnded     = revealElementTrans.on('transitionend',transitionEnded);
                    operaTransitonEnded    = revealElementTrans.on('oTransitionEnd otransitionend', transitionEnded);
                }

                function removeTransitionListeners(revealElementTrans){
                    if(webKitListenerTransEnd){
                        revealElementTrans.unbind('webkitTransitionEnd', transitionEnded);
                    }
                    if(mozTransitionEnded){
                        revealElementTrans.unbind('transitionend', transitionEnded);
                    }
                    if(operaTransitonEnded) {
                        revealElementTrans.unbind('oTransitionEnd otransitionend', transitionEnded);
                    }
                }

               function doReveal(){
                        if(!started){
                            started = true;
                            if (!target){
                                target   = document.querySelector($attrs.revealToggle);
                            }
                            if (!content){
                                  content = target.querySelector('.revealable_content');
                            }
                            var revealElementName = $attrs.revealToggle.substring(1,$attrs.revealToggle.length);
                            revealElement =  angular.element(document.getElementById(revealElementName));

                            if(!$attrs.contracted) {
                                setUpTranstionListeners(revealElement);
                                content.style.border = '1px solid rgba(0,0,0,0)';
                                var y = content.clientHeight;
                                content.style.border = 0;
                                target.style.height = y + 'px';
                            } else {
                                setUpTranstionListeners(revealElement);
                                content.style.overflow = 'hidden';
                                target.style.height = '0px';
                                target.style.overflow ='hidden';
                            }
                            $attrs.contracted = !$attrs.contracted;
                            started = false;
                        }
               }

               $scope.$on('$destroy', function() {
                    removeTransitionListeners(revealElement);
              });
        }
})();