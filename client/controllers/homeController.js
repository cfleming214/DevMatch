angular
  .module('solo.HomeController', ['ngRoute', 'solo.UserFactory', 'solo.MessageFactory'])
  .controller('HomeController', HomeController);


function HomeController($scope, UserFactory, MessageFactory) {

}
