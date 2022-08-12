import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://material.angular.io/components/categories";
Given(`I open Material Angular page`, () => {
  cy.visit(url);
});

And(`I click on Calendar Component`, () => {
  cy.get(
    '[href="/components/datepicker"] > .docs-component-category-list-card > .docs-component-category-list-card-title'
  ).click();
});

Then(`I verify the Calendar Component for existance`, () => {
  expect(cy.get("#mat-input-0")).to.exist;
});

Then(`I enter the Calendar date as today and verify the entered date`,() => {  
  cy.get("#mat-input-0").type(new Date().toDateString()).should("have.value", new Date().toDateString());
  }
);
