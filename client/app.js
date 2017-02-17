const app = angular
  .module('myApp', ['ngRoute','solo.HomeController','solo.AboutController', 'solo.MessageFactory', 'solo.createController']);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
      .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController',
    })
      .when('/team', {
      templateUrl: './partials/about.html',
      controller: 'AboutController',
    })
      .when('/home', {
      templateUrl: './partials/home.html',
      controller: 'HomeController',
    })
      .when('/createteam', {
        templateUrl: './partials/create.html',
        controller: 'createController',
      })

}
