angular.module('cerveza').
    controller('CervezaController', function CervezaController($scope, $http) {
        $scope.buscaCervezas = () => {
            let url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
            if ($scope.nombre) {
                utl += "&query=" + $scope.nombre;
            };
            //la pàgina està caiguda, així que no fuinciona l'exmeplre, però teoricament funciona així:
            $http.jsonp(url).then((resposta) => {
                $scope.cervezas = resposta.data

            })

        }
    });