nixflix.factory('PostsFactory', function PostsFactory() {
  var factory = {};
  factory.posts = [];
  factory.addPost = function() {
    factory.posts.push({ postTitle: factory.postTitle, postText: factory.postText, id: factory.posts.length + 1 });
    factory.postTitle = null;
    factory.postText = null;
  };
  return factory;
});
