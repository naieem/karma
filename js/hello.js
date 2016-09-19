angular.module('pie', []).controller('naieem', ['$scope', function ($scope) {
	$scope.slice=8;
	$scope.reduce=function(){
		$scope.slice--;
	}
}]);