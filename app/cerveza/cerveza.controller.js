angular.module('cerveza').
    controller('CervezaController', function CervezaController($scope, $http) {
        $scope.buscaCervezas = () => {
            let url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
            if ($scope.nombre) {
                utl += "&query=" + $scope.nombre;
            };
            //la p�gina est� caiguda, aix� que no fuinciona l'exmeplre, per� teoricament funciona aix�:
            $http.jsonp(url).then((resposta) => {
                $scope.cervezas = resposta.data

            })

        }
    });