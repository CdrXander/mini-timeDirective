angular.module('timeApp').directive('ngButton', function() {

	function getColor() {
		var colors = ['red','blue','yellow','orange','purple'];

		return colors[Math.floor(Math.random() * colors.length)];
	}


	return {
		restrict: "AE",
		templateUrl: './js/button.html',
		scope: {
			text:'='
		},
		link: function(scope, element, attributes) {
			element.on('click', function() {
				setInterval(function() {
					element.children().css('background-color', getColor());
				}, 1000)	
			})
		}
	}
})