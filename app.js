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

  $stateProvider.state('home', {
    url: "/home",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl",
        controllerAs: "header"
      },
      'body': {
        templateUrl: "partials/home.html",
        controller: "PostsCtrl",
        controllerAs: "body"
      }
    }
  });
});
