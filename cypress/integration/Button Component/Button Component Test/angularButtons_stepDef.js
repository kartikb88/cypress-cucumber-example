import { Given, Then } from "cypress-cucumber-preprocessor/steps";
 
const url = "https://material.angular.io/components/categories";
Given(`I open Material Angular page`, () => {
   cy.visit(url);
 });
 
And(`I click on Button Component`, () => {
  cy.contains("Button").click();
});
Then(`I verify the Primary Button for existance`, (color) => {
  expect(
    cy.get(
      ":nth-child(3) > .example-button-row > .mat-primary > .mat-button-wrapper"
    )
  ).to.exist;
});
Then(
  `I verify the Primary Button Background color should be {string}`,
  (color) => {
    if (color === "Blue") {
      var colorcode = "rgb(63, 81, 181)";
    } else if (color === "Black") {
    }
    cy.get(":nth-child(3) > .example-button-row > .mat-primary")
      .invoke("css", "background-color")
      .should("equal", colorcode);
  }
);
