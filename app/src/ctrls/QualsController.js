function QualsController($scope, $http) {
  var $SHEETKEY = "1iEjHU2-kEfuMuRypNA44LqzTYFv3ruzLqs-VzbayWiI";
  var $SHEETID = "od6";
  $http.get("https://spreadsheets.google.com/feeds/list/" + $SHEETKEY + "/" + $SHEETID + "/public/values?alt=json")
    .success(function(response) {$scope.qual_matches = response.feed.entry;});
  $scope.currentNavItem = '0';
}

export default [ '$scope', '$http', QualsController ];
