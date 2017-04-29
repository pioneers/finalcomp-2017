/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($scope, $http) {
	$http.get("https://spreadsheets.google.com/feeds/list/1efUMXdadlgB2Vr4ITq_RkECUX0f_DpNkPTuj6xL3bUE/1/public/basic?alt=json")
		.success(function(response) {$scope.teams = response.feed.entry;});
  $scope.currentNavItem = window.location.hash;  // for nav bar
}

/** really ugly page with all the sheet keys: 
 *  https://spreadsheets.google.com/feeds/worksheets/1iEjHU2-kEfuMuRypNA44LqzTYFv3ruzLqs-VzbayWiI/private/full
 */

export default [ '$scope', '$http', AppController ];
