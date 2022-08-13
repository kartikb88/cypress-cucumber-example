const writeFileSync = require("fs");
const XLSX =  require("xlsx");
class excel {
  convertXLToJson() {
    try {
      const workBook = XLSX.readFile("./testData/testData.xlsx");
      const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.testData);
      writeFileSync(
        "./cypress/fixtures/testData.json",
        JSON.stringify(jsonData, null, 4),
        "utf-8"
      );
    } catch (e) {
      throw Error(e);
    }
  }
}
module.exports = new excel();
