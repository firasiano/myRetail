
(function(){
	'use strict';

	angular.module('pdp')
		.directive('pdpItemHero', itemHeroDir);

	function itemHeroDir(){
		return {
			restrict: 'E',
			templateUrl: 'src/app/pdp/item-hero/pdp-item-hero.html',
			controller: itemHeroController,
			controllerAs: 'vm',
			scope: {
				productHero: '='
			},
			bindToController: true
		}
	}

	itemHeroController.$inject = ['$scope'];
	function itemHeroController($scope){
		var vm = this;

		//selected index for carousel
		vm.selectedIndex = 0;
	}

}());