angular.module('paisos').
    controller('PaisosController', function PaisosController($scope, $http) {
        $http.get("https://restcountries.eu/rest/v1/all").then(function (resposta) {
            $scope.paisos = resposta.data;
            console.log(resposta);
        }, function (resposta) {
            $scope.paisos = [{ name: "Error " + res.status }];
        });

    });