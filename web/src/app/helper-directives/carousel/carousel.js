
(function(){
	'use strict';

	angular
		.module('helpers')
		.directive('carousel', carouselDir);

	function carouselDir(){
		return {
			restrict: 'E',
			templateUrl: 'src/app/helper-directives/carousel/carousel.html',
			controller: carouselController,
			controllerAs: 'vm',
			scope: {
				images: '=',
				selectedIndex: '@'
			},
			bindToController: true
		};
	}

	carouselController.$inject = [];
	function carouselController(){
		var vm = this;
		var beginningIndex = 0;
		var endingIndex = 3;

		vm.selectedIndex = parseInt(vm.selectedIndex);
		vm.visibleImages = vm.images.slice(beginningIndex, endingIndex);

		vm.moveForward = moveForward;
		vm.moveBackward = moveBackward;

		vm.isLastShowing = isLastShowing;
		vm.isFirstShowing = isFirstShowing;

		function moveForward(){
			updateVisibleImages(++beginningIndex, ++endingIndex);
		}

		function moveBackward(){
			updateVisibleImages(--beginningIndex, --endingIndex);
		}

		function updateVisibleImages(beginningIndex, endingIndex){
			vm.visibleImages = vm.images.slice(beginningIndex, endingIndex);
		}

		function isFirstShowing(){
			return beginningIndex <= 0;
		}

		function isLastShowing(){
			return endingIndex >= vm.images.length;
		}
	}

}());
