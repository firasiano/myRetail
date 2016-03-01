
(function(){
	'use strict';

	angular.module('promos', []);

	angular
		.module('promos')
		.service('promoProductsModel', promoProductsModel);

	promoProductsModel.$inject = ['$http', '$state', '$q'];

	function promoProductsModel($http, $state, $q){

		var model = this;

		// model URLs
		var URLS = {
			FETCH: 'api/promo/promo-products.json'
		};

		// where promo products will exist
		var promoProducts;

		model.getPromoProducts = getPromoProducts;


		// Check if promoProducts is cached, if yes return it, 
		// otherwise, initialize the make the request to fetch the products
		function getPromoProducts(){
			console.log(promoProducts);
			return promoProducts ? $q.when(promoProducts) : fetchPromoProducts();
		}

		// The /api to fetch the promo products
		function fetchPromoProducts(){
			return $http({
				method: 'GET',
				url: URLS.FETCH
			}).then(function (response) {
				// cache promo products in promoProducts
				promoProducts = response.data;
				return promoProducts;
				
			}, function (err) {
				
			});
		}
	}
}());