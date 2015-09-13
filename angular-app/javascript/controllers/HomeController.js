app.controller('HomeController', ['$scope', '$http', function($scope, $http){
  console.log("Home controller.");
  $http.get('http://localhost:8080/api/swords/').then(function(response) { // INDEX
    $scope.swords = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);
