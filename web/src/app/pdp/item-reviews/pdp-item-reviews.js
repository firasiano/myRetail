
(function(){
	'use strict';

	angular.module('pdp')
		.directive('pdpItemReviews', itemReviewsDir);

	function itemReviewsDir(){
		return {
			restrict: 'E',
			templateUrl: 'src/app/pdp/item-reviews/pdp-item-reviews.html',
			controller: itemReviewsCtrl,
			controllerAs: 'vm',
			scope: {
				productReviews: '='
			},
			bindToController: true
		}
	}

	function itemReviewsCtrl(){
		var vm = this;
	}
}());