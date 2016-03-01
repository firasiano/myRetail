
(function(){
	'use strict';

	angular.module('pdp')
		.controller('pdpController', pdpController);

	pdpController.$inject = ['productModel'];

	function pdpController(productModel){
		var vm = this;

		vm.productDetails = productModel.getProductDetails()
			.then(initProductDetailsModels);

		//set product (hero, details, reviews) models
		function initProductDetailsModels(productDetails){
			vm.reviewsData = productDetails.CustomerReview;

			vm.heroData = {
				images: formatImages(productDetails.Images),
				title: productDetails.title
			};

			vm.detailsData = {
				offers: productDetails.Offers,
				promotions: productDetails.Promotions,
				availability: productDetails.purchasingChannelCode,
				returnPolicty: productDetails.ReturnPolicy,
				heighlights: productDetails.ItemDescription
			};

			function formatImages(images){
				var allImages = images[0].AlternateImages;
				allImages.splice(0, 0, images[0].PrimaryImage[0]);
				return allImages;
			}
		}
	}

}());
