app.controller('NewController', ["$scope", '$http', '$location', function($scope, $http, $location){
  console.log("New controller");
  $scope.addSword = function(sword){
    var sword = {
      swordName:  $scope.sword.swordName,
      swordOwner: $scope.sword.swordOwner,
      likes: 0
    }
    $http.post('http://localhost:8080/api/swords/', sword).then(function(response) { // NEW
      console.log("Sword added.");
      $location.path( "/" );
    }, function(response) {
      console.log("Invalid URL");
    });
  }
}]);
