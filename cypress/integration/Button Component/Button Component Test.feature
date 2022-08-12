Feature: The Material Angular

  I want to verify the Angular Component button
  
  @button-test @smoke
  Scenario: Checking the Primary Button Color as Blue
    Given I open Material Angular page
    Then I see "Components | Angular Material" in the title
    And I click on Button Component
    Then I verify the Primary Button for existance
    Then I verify the Primary Button Background color should be "Blue"