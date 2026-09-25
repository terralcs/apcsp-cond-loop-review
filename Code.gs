
/*
AP CSP Selection & Iteration Review — Google Sheets backend

SETUP:
1. Create a Google Sheet.
2. Extensions -> Apps Script.
3. Replace the default code with this file.
4. Click Deploy -> New deployment.
5. Select "Web app".
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy and copy the /exec URL.
9. Paste that URL into config.js in the website.
10. Run the website. Each completed review will create a row.

The script automatically creates a sheet named "Review Data" with columns.
*/

const SHEET_NAME = "Review Data";

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    ok: true,
    message: "AP CSP Review endpoint is running."
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp","Student Name","Class Period","Teacher",
        "Score","Total Questions","Percent",
        "Strengths","Areas for Improvement","Topic Scores",
        "Question Results"
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      data.studentName || "",
      data.period || "",
      data.teacher || "",
      data.score || 0,
      data.total || 0,
      data.percent || 0,
      data.strengths || "",
      data.weaknesses || "",
      JSON.stringify(data.topicScores || {}),
      JSON.stringify(data.questionResults || [])
    ]);

    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      ok:false, error:String(err)
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
