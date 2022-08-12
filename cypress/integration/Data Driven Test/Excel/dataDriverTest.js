const testData = require("../fixtures/testData.json");
describe("Dynamically Generated Tests", () => {
  testData.forEach((testDataRow) => {
    const data = {
      username: testDataRow.username,
      password: testDataRow.password
    };
    context(`Generating a test for ${data.username}`, () => {
      it("Printing Data from xl file", () => {
        cy.log(data.username)
        cy.log(data.password)
      });
    });
  });
});
