angular.module('timeApp').directive('showTime', function() {


	return {
		restrict: "E",
		templateUrl: "./js/timeDirective.html",
		link: function(scope, element, attributes) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
})