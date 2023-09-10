function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Set Triggers')
      .addItem('Every 10 Minute', 'minuteTrigger10')
      .addSeparator()
      .addItem('Every 1 Hours', 'HoursTrigger1')
      .addSeparator()
      .addItem('delete ALL Trigger', 'deleteTrigger')
      .addSeparator()
      .addToUi();
}
