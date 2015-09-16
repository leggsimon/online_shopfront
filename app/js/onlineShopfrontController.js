shopfront.controller('OnlineShopfrontController', ['$scope', '$http', function ($scope, $http) {
  $http.get('clothes/clothes.json').success(function (data) {
    $scope.items = data;
  });
}]);
