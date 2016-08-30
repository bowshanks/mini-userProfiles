//
angular.module('userProfiles').controller('MainController', function($scope, mainService){

  function init() {
      mainService.getUsers().then(function(users) {
        $scope.users = users;
      })
  }
  init();

  $scope.toggleFavorite = mainService.toggleFavorite
})
