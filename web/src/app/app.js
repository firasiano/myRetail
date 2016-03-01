
(function(){
	'use strict';
	angular
		.module('myRetail', [
			'ngAnimate',
			'ui.router',
			'ui.bootstrap',
			'promos',
			'pdp'
		])
		.config(routerConfig)
		.filter('trustHtml', trustHtml);

	routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routerConfig($stateProvider, $urlRouterProvider){

		$stateProvider
		    .state('home', {
		      url: "/home",
		      views: {
		      	mainView: {templateUrl: "src/app/home/home.html"}
		      }
		    });

		    $urlRouterProvider.otherwise('/home');
	}

	trustHtml.$inject = ['$sce'];

	function trustHtml($sce){
		return function(text){
			console.log('trusting')
			return $sce.trustAsHtml(text);
		};

	}
}());
