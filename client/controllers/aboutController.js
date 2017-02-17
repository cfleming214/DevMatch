angular
  .module('solo.AboutController', ['ngRoute', 'solo.UserFactory'])
  .controller('AboutController', AboutController);

function AboutController($scope, UserFactory, $animate) {
  let team = [];
  let teamSkill = [];

  let teamAverage = 0;

  let getAverage = function(teamSkill) {
    let accum = 0;
    for(let i = 0; i < teamSkill.length; i += 1) {
      accum += teamSkill[i];
    }
    $scope.teamAverage = accum / teamSkill.length;
}

  $scope.postdb = function() {
    alert('Thank you for submitting your team! We wil happy get back to you within 24-48 hours!');
  }
  $scope.projectName = UserFactory.projectName;
  $scope.listOfMembers = "list of members";
  $scope.teamStats = "team stats";
  $scope.projectOwner = UserFactory.projectOwner;
  $scope.projectName = UserFactory.projectName;
  $scope.contactEmail = UserFactory.contactEmail;
  $scope.contactNumber = UserFactory.contactNumber;
  $scope.projectDescription = UserFactory.projectDescription;
  $scope.alert = function(profileName) {

    // team.push({});
    team.push(profileName);
    teamSkill.push(profileName.profilePercentage);
    getAverage(teamSkill);

  }
  $scope.team = team;
  $scope.teamAverage = teamAverage;

  profiles = [];
  createProfile = function(name, skills, percentage, message, picUrl) {
    profiles.push({
      profileName: name,
      profileSkills: skills,
      profilePercentage: percentage,
      profileMessage: message,
      picUrl: picUrl
    });
    console.log(profiles);
  }
  createProfile("Christopher Fleming", "Javascript", 75, "Please choose me to be on your team! I would love to work for you!", "./godfather.jpg");
  createProfile("Santa Claus", "Javascript, Time Management", 27, "I am very VERY VERY good at working with schedules.... one day a year.", "www.google.com/images");
  createProfile("Will Smith", "JavaScript, Acting", 90, "I am an angular developer. I work for free! Just kidding!!!!!!", "www.google.com/images");
  createProfile("Nice Guy", "Javascript", 40, "I am super nice. I will keep the team on track!", "www.google.com/images");
  createProfile("Nice Girl", "Javascript", 68, "Just joined the team! Hard worker, and great time manager!", "www.google.com/images");
  createProfile("Nice Person", "Javascript", 98, "Just joined the team! Hard worker, and great time manager!", "www.google.com/images");
  // createProfile("Nice Girl", "Javascript", 68, "Just joined the team! Hard worker, and great time manager!", "www.google.com/images");
  // createProfile("Nice Girl", "Javascript", 68, "Just joined the team! Hard worker, and great time manager!", "www.google.com/images");
  // createProfile("Nice Girl", "Javascript", 68, "Just joined the team! Hard worker, and great time manager!", "www.google.com/images");


  UserFactory.profiles = profiles;
  $scope.profiles = profiles;






}
