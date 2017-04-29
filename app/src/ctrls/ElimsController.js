function ElimsController($scope, $http) {
  var $SHEETKEY = "1iEjHU2-kEfuMuRypNA44LqzTYFv3ruzLqs-VzbayWiI";
  var $SHEETID = "ooobbcl";
  $http.get("https://spreadsheets.google.com/feeds/list/" + $SHEETKEY + "/" + $SHEETID + "/public/values?alt=json")
    .success(function(response) {$scope.elim_matches = response.feed.entry;});
  $scope.currentNavItem = '0';
}

export default [ '$scope', '$http', ElimsController ];
