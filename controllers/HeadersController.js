nixflix.controller('HeadersCtrl', function HeadersCtrl($location) {
  this.currentPath = $location.path();
});
