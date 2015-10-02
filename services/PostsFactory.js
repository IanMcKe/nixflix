nixflix.factory('PostsFactory', function PostsFactory() {
  var factory = {};
  factory.posts = [];
  factory.addPost = function() {
    factory.posts.push({ postName: factory.postName, id: factory.posts.length + 1 });
    factory.postName = null;
  };
  return factory;
});
