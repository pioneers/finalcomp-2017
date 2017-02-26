/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($scope, $http) {
	$http.get("https://spreadsheets.google.com/feeds/list/1efUMXdadlgB2Vr4ITq_RkECUX0f_DpNkPTuj6xL3bUE/ovml8vg/public/values?alt=json")
		.success(function(response) {$scope.teams = response.feed.entry;});
}

export default [ '$scope', '$http', AppController ];
