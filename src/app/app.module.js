(function() {
  'use strict';
   // Declare app level module which depends on views, and components
  angular.element(document).ready(function() {
       angular.bootstrap(document, ['wsSeed']);
  });

  angular.module('wsSeed', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'wsSeed.app.core.module',
    'wsSeed.utilFilters.module',
    'wsSeed.utilDirectives.module',
    'wsSeed.mainStage.module',
    'wsSeed.navbar.module',
    'wsSeed.user.module'
  ]);
})();
