angular.module('home').
    controller('HomeController', function HomeController($scope, $http){
        $scope.total = 0;
        $scope.sumar = function (quantitat) {
            $scope.total = parseInt($scope.total) + parseInt($scope.cuanto);

        }
        $scope.restar = function (quantitat) {
            $scope.total = parseInt($scope.total) - parseInt($scope.cuanto);

        }

    });