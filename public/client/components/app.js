angular.module('main-app')

.controller('MainCtrl', function() {

  this.movies = window.dummyData;
  // console.log(this.movies);
  // this.searchResults = (data) => {
  //   this.movies = data;
  //   this.currentVideo = this.videos[0];
  // }

})
.directive('app', function() { // directive name is the HTML tag name REMEMBER THIS
  return {
    scope: {},
    restrict: 'E',
    controller: 'MainCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'public/client/templates/app.html'
  };
});