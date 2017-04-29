function QualsController($scope, $http) {
  var $SHEETKEY = "1iEjHU2-kEfuMuRypNA44LqzTYFv3ruzLqs-VzbayWiI";
  var $SHEETID = "oj6wrxp";
  $http.get("https://spreadsheets.google.com/feeds/list/" + $SHEETKEY + "/" + $SHEETID + "/public/values?alt=json")
    .success(function(response) {$scope.ranking_sorter = response.feed.entry; console.log(response.feed.entry);});
}

export default [ '$scope', '$http', QualsController ];
