

(function(){
	'use strict';

	angular
		.module('pdp')
		.service('productModel', productModel);

	productModel.$inject = ['$http', '$state', '$stateParams', '$q'];

	function productModel($http, $state, $stateParams, $q){

		var model = this;

		// model URLs
		var URLS = {
			FETCH: 'api/product/'+ $stateParams.itemId +'.json'
		};
		
		// where product details will live
		var productDetails;

		model.getProductDetails = getProductDetails;
		model.quantity = 1;

		// Check if productDetails is cached, if yes return it, 
		// otherwise, make the request to fetch the product details
		function getProductDetails(){
			console.log('getting product details');
			return productDetails ? $q.when(productDetails) : fetchProductDetails();
		}

		// The /api to fetch the product details
		function fetchProductDetails(){
			return $http({
				method: 'GET',
				url: URLS.FETCH
			}).then(function (response) {
				// cache product details in productDetails
				productDetails = response.data && response.data.CatalogEntryView && response.data.CatalogEntryView[0];
				return productDetails;
				
			}, function (err) {
				
			});
		}
	}
}());