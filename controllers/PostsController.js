nixflix.controller('PostsCtrl', function PostsCtrl(PostsFactory) {
  this.posts = PostsFactory.posts;
  this.PostsFactory = PostsFactory;
});
