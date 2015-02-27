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
    link: function(scope, elm, attrs) { 
    	scope.$watchCollection('items', function(newValue, oldValue){
	      React.renderComponent(
	        ITEMLIST({items:newValue}),
	        elm[0]
	      );
      })

    	window.metrics.end = Date.now();
    	window.metrics.result = window.metrics.end - window.metrics.start;    	
  	},
  }
});