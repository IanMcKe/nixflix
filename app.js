var nixflix = angular.module('nixflix', ['ui.router']);

nixflix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl",
        controllerAs: "header"
      },
      'body': {
        templateUrl: "partials/welcome.html",
      }
    }
  });

  $stateProvider.state('main', {
    url: "/main",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl",
        controllerAs: "header"
      },
      'body': {
        templateUrl: "partials/main.html",
        controller: "PostsCtrl",
        controllerAs: "main"
      }
    }
  });

  $stateProvider.state('main.post', {
    url: "/:postId",
    templateUrl: "partials/main.post.html",
    controller: "ContentCtrl",
    controllerAs: "child"
  });
});
