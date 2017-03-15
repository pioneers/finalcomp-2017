// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-route';

import HomeController from 'src/ctrls/HomeController';
import TeamsController from 'src/ctrls/TeamsController';
import ScheduleController from 'src/ctrls/ScheduleController';
import QualsController from 'src/ctrls/QualsController';
import ElimsController from 'src/ctrls/ElimsController';
import RankingsController from 'src/ctrls/RankingsController';
import Users from 'src/users/Users';

export default angular.module( 'finalComp', [ 'ngRoute', 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);

	var darkerYellowMap = $mdThemingProvider.extendPalette('amber', {
		'A200': '#FFAB00'
	});

	var darkerBlueMap = $mdThemingProvider.definePalette('PiEBlue', {
		'50': 'bac0c8',
		'100': 'a3abb6',
		'200': '8d97a4',
		'300': '768292',
		'400': '5f6d80',
		'500': '48586e',
		'600': '31435c',
		'700': '1b2f4a',
		'800': '182a42',
		'900': '15253b',
		'A100': '1b2f4a',
		'A200': '1b2f4a',
		'A400': 'd1d5da',
		'A700': '2f5382'
	});

	$mdThemingProvider.definePalette('darkerYellow', darkerYellowMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('PiEBlue')
      .accentPalette('darkerYellow')
	  .backgroundPalette('blue-grey');
  })
  .config(function($routeProvider) {
    $routeProvider 
      .when('/', {
        templateUrl : 'pages/home.html',
        controller : 'HomeController'
      })
      .when('/schedule', {
        templateUrl : 'pages/schedule.html',
        controller : 'ScheduleController'
      })
      .when('/teams', {
        templateUrl : 'pages/teams.html',
        controller : 'TeamsController'
      })
      .when('/elims', {
        templateUrl : 'pages/elims.html',
        controller : 'ElimsController'
      })
      .when('/quals', {
        templateUrl : 'pages/quals.html',
        controller : 'QualsController'
      })
      .when('/rankings', {
        templateUrl : 'pages/rankings.html',
        controller : 'RankingsController'
      });
  })
  .controller('HomeController', HomeController)
  .controller('ScheduleController', ScheduleController)
  .controller('TeamsController', TeamsController)
  .controller('ElimsController', ElimsController)
  .controller('QualsController', QualsController)
  .controller('RankingsController', RankingsController);
