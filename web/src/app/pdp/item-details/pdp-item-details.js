
(function(){
	'use strict';

	angular.module('pdp')
		.directive('pdpItemDetails', itemDetailsDir);

	function itemDetailsDir(){
		return {
			restrict: 'E',
			templateUrl: 'src/app/pdp/item-details/pdp-item-details.html',
			controller: itemDetailsCtrl,
			controllerAs: 'vm',
			scope: {
				productDetails: '='
			},
			bindToController: true
		}
	}

	itemDetailsCtrl.$inject = ['productModel'];

	function itemDetailsCtrl(productModel){
		var vm = this;
		vm.model = productModel;
		vm.changeQuantity = changeQuantity;
		vm.isAvailableForPickup = isAvailableForPickup;
		vm.isAvailableOnline = isAvailableOnline;

		function changeQuantity(by){
			if( by === 1 ){
				vm.model.quantity++;
			} else if(by === -1 && vm.model.quantity>1){
				vm.model.quantity--;
			}
		}

		function isAvailableForPickup(){
			return vm.productDetails && (vm.productDetails.availability === '0' || vm.productDetails.availability === '1');
		}

		function isAvailableOnline(){
			return vm.productDetails && (vm.productDetails.availability === '0' || vm.productDetails.availability === '2');
		}
	}
}());