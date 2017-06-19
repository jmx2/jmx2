angular.module('main-app') // copied mostly from ng-cast

// .controller('SearchCtrl', function() {
// })
.directive('movieEntry', function() {
  return {
    scope: {},
    restrict: 'E',
    // controller: 'SearchCtrl',
    // controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'public/client/templates/movieEntry.html'
  };
});

