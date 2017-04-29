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
  /* Sunday:
   8:30 - 9:00 9:00 - 10:30 10:30 - 11:00 11:00 - 12:30 12:30 - 4:00 4:00 - 5:00
   Check In
   Lobby (LHS Entrance)
   Qualification Matches 2
   Auditorium
   Alliance Selection
   Auditorium
   Lunch Available
   C-Level Lawn
   Elimination Matches
   Auditorium
   Awards Ceremony
   Auditorium
   */
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

