
(function(){

	angular.module('pdp', [
		'helpers'
		])
		.config(routerConfig);

	routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routerConfig($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('pdp', {
		      url: "/pdp/:itemId",
		      views: {
		      	mainView: {
		      		templateUrl: "src/app/pdp/pdp.html",
			      	controller: 'pdpController',
			      	controllerAs: 'vm'
		      	}
		      }
		    });
	}
}());
