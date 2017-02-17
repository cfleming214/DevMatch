angular
  .module('solo.createController', ['ngRoute', 'solo.UserFactory'])
  .controller('createController', createController);

function createController($scope, $location, UserFactory) {

//user factory is the project generator
  $scope.teamName = "my team";
  $scope.listOfMembers = "list of members";
  $scope.teamStats = "team stats";
  $scope.save = function () {
    UserFactory.projectName = $scope.projectName;
    UserFactory.projectOwner = $scope.projectOwner;
    UserFactory.projectDescription = $scope.projectDescription;
    UserFactory.contactEmail = $scope.contactEmail;
    UserFactory.contactNumber = $scope.contactNumber;
  }
  $scope.reRoute = (url) => {
    $scope.save();
    $location.url(url);

  }
}
