function QualsController($scope, $http) {
  var $SHEETKEY = "1efUMXdadlgB2Vr4ITq_RkECUX0f_DpNkPTuj6xL3bUE";
  var $SHEETID = "oy2rs5f";
  $http.get("https://spreadsheets.google.com/feeds/list/" + $SHEETKEY + "/" + $SHEETID + "/public/values?alt=json")
    .success(function(response) {$scope.qual_matches = response.feed.entry;});
}

export default [ '$scope', '$http', QualsController ];
