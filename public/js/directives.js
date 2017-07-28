'use strict';

/* Directives */

angular.module('coursesSearchApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
