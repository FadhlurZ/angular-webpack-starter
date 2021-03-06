import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './home.html'
import controller from './home.controller'
import service from './home.service'
import './home.scss'

let module = angular.module('home', [
	uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
	"ngInject";

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('app', {
			abstract: true
		})
		.state('app.home', {
			url: '/home',
			views: {
				'@': {
					template: template,
					controller: controller,
					controllerAs: 'home'
				}
			}
		})
})
.service('', service)
.name;

export default module;