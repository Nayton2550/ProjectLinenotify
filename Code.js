function main() {

  //--------- Setup Parameter ---------//
  var sheetid = "1CwG-AwzAAtS2oi7x7spUoaXfn9T__j4S_aAfzdlixBM";
  var notifyToken = "aH4VCwMV8d8yoPl6zkoZ0hnSrWIO2j0iVTETB1UyhSj";

  var ssName = "ชีต1";
  var ssChart = "ชีต1";
  
  // ------------------------------------//
  
  var ss = SpreadsheetApp.openById(sheetid).getSheetByName(ssName);
  var msg;

  // --------- Get Chart Image ----------//
  var chart = getChart(sheetid,ssChart);

  var
  


  // --------- Your Message Go here --------//
  msg = "รายงานฝุ่น PM2.5  " + "\n" + 
        "วันที่ = "  +ss.getRange('D1').getValue()+ "\n" + 
        "พบปริมาณฝุ่นละออง ขนาด = " +ss.getRange('B3').getValue()+ " ไมครอน " + "\n" + 
        "คุณภาพอากาศ = " +ss.getRange('I3').getValue()+ "\n";
  // ------------------------------------//



  // --------- Sending Message and Chart to LineNotify --------//
   msg = {
    message: msg,
    imageFile: chart
  }
  sendLineNotify(msg, notifyToken);
}

function sendLineNotify(messages, accessToken) {
  const lineNotifyEndPoint = "https://notify-api.line.me/api/notify";

  const options = {
    "headers": { "Authorization": "Bearer " + accessToken },
    "method": 'post',
    "payload": messages,
  };

  try {
    UrlFetchApp.fetch(lineNotifyEndPoint, options);
  } catch (error) {
    Logger.log(error.name + "：" + error.message);
    return;
  }
}


function getChart(ssid,name) {
  var ss = SpreadsheetApp.openById(ssid).getSheetByName(name);
  const chart = ss.getCharts()[0].getBlob().getAs("image/png");
  return chart;
}

function DateConvert(date) {         

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = date.getDate().toString();

    return (dd[1]?dd:"0"+dd[0]) + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + yyyy;
};
