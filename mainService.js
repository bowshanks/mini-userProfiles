//
angular.module('userProfiles').service('mainService',function($http){
  this.users = null;

  this.getUsers = function(){
    return $http({
              method: 'GET',
              url: 'data.json'
              }).then(function(response) {
                // console.log(response.data)
                 this.users = response.data;
                 return this.users;
              }, function(response) {
                return 'no data'
              });
}

this.toggleFavorite = function(userIndex){
    this.users[userIndex].isFavorite = !this.users[userIndex].isFavorite;
}

});
