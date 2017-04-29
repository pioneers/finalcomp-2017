function ScheduleController($scope) {
  $scope.satTime = ['8:30 - 9:00',
  '9:15 - 9:30', '9:30 - 11:30', '10:45 - 11:30', '11:00 - 12:30', '12:00 - 4:30', '4:30 - 5:00'];
  $scope.satDesc = [
    {task: 'Check In', place: 'Lobby (LHS Entrance)'},
    {task:'Drivers Meeting', place: 'Auditorium'},
    {task: 'Robot Inspection', place: 'Auditorium'},
    {task: 'Exhibition Matches', place: 'Auditorium'},
    {task: 'Lunch Available', place: 'C-Level Lawn'},
    {tasl: 'Qualification Matches', place: 'Auditorium'},
    {task: 'Group Photos', place: ''}];
  $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };
}

export default [ '$scope', ScheduleController ];

