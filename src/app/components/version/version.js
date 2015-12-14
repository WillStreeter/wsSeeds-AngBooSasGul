'use strict';

angular.module('wsSeed.version', [
  'wsSeed.version.interpolate-filter',
  'wsSeed.version.version-directive'
])

.value('version', '0.1');
