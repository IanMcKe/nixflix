nixflix.controller('ContentCtrl', function($stateParams, PostsFactory, UtilitiesFactory) {
  this.post = UtilitiesFactory.findById(PostsFactory.posts, $stateParams.postId);
});
