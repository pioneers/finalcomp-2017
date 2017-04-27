/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function TeamsController($scope, $http) {
  var $SHEETKEY = "1efUMXdadlgB2Vr4ITq_RkECUX0f_DpNkPTuj6xL3bUE";
  var $SHEETID = "ovml8vg";
  $http.get("https://spreadsheets.google.com/feeds/list/" + $SHEETKEY + "/" + $SHEETID + "/public/values?alt=json")
    .success(function(response) {$scope.teams = response.feed.entry;});
}

export default [ '$scope', '$http', TeamsController ];
