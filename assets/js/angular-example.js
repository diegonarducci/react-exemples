window.metrics = {
	start: 0,
	end: 0,
	result: 0
}

angular.module('testAngular', []).
controller('mycontroller', ['$scope', function($scope){
	window.metrics.start = Date.now();
	$scope.items = [];

	for (var i = 100; i >= 0; i--) {
		$scope.items.push(i);
	};

	$scope.metrics = window.metrics;
}]).
directive('componente', function(){
  return{
  	scope:{
    	items: '='
    },
    restrict:'E',
    templateUrl: "templates/template-test.html",
    link: function(scope, elm, attrs) { 
    	window.metrics.end = Date.now();
    	window.metrics.result = window.metrics.end - window.metrics.start;    	
  	},
  }
});