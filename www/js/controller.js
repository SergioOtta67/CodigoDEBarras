angular.module('lector.controllers',['ionic', 'ngCordova'])
	.controller("lectorcontroller", function ($scope, $cordovaBarcodeScanner ){

	$scope.leercodigo = function(){

		$cordovaBarcodeScanner.scan().then( function(imagenEscaneada){


        $scope.producto = imagenEscaneada;
        $scope.leido=[];
    $http.get('http://sejuega.herokuapp.com/buscar', {headers: {'productos': $scope.producto}}).then(function(resp) {
    	 $scope.leido = resp.data.data;
 	alert($scope.leido.text)    
    }, function(err) {
      console.error('ERR', err);

    });

			alert(imagenEscaneada.text)

		}, function(error){

			alert("Ha ocurrido un error: "+error);
		});
	}	

	});