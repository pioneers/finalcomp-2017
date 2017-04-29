/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function TeamsController($scope, $http) {
  var $SHEETKEY = "1iEjHU2-kEfuMuRypNA44LqzTYFv3ruzLqs-VzbayWiI";
  var $SHEETID = "ocj5dn7";
  $http.get("https://spreadsheets.google.com/feeds/list/" + $SHEETKEY + "/" + $SHEETID + "/public/values?alt=json")
    .success(function(response) {$scope.teams = response.feed.entry;});
}

export default [ '$scope', '$http', TeamsController ];
