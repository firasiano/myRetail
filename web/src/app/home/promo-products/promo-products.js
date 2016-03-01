
(function (){
	'use strict';
	angular
		.module('promos')
		.directive('promoProducts', promoProductsDirective);

	function promoProductsDirective(){
		return {
			restrict: 'E',
			templateUrl: 'src/app/home/promo-products/promo-products.html',
			controller: promoProductsController,
			controllerAs: 'promoVM',
			bindToController: true
		}
	}

	promoProductsController.$inject = ['$state', 'promoProductsModel'];
	function promoProductsController($state, model){
		
		var vm = this;
		
		vm.products = [];
		getProducts();

		function getProducts(){
			model
				.getPromoProducts().then(displayPromoProducts, displayPromoProducts);
		}

		function displayPromoProducts(products){
			console.log(products);
			vm.products = products;
		}
	}
}());
