function HoursTrigger1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  ScriptApp.newTrigger("HoursTrigger1")  //Runs every 1 hours
  .timeBased()
  .everyHours(1)
  .create();
}

function deleteTrigger(triggerID) {
  var triggers = ScriptApp.getProjectTriggers(); 
for (var i = 0; i < triggers.length; i++) {
ScriptApp.deleteTrigger(triggers[i])
}
}
