import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";


const url = "https://material.angular.io/components/categories";
Given(`I open Material Angular page`, () => {
  cy.visit(url);
});

And(`I click on Select Component`, () => {
    cy.get('[href="/components/select"] > .mat-list-item-content').click()
  });

  Then(`I Select the {string} and {string} and verify the selection`, (Favorite_food,Favorite_car) => {
   cy.wait(2000)
    cy.get('#mat-select-4').click()
    cy.contains(`${Favorite_food}`).click()
    cy.get('#mat-select-4').should('have.text',`${Favorite_food}`)
    cy.get('#mat-input-1').select(Favorite_car)
  })