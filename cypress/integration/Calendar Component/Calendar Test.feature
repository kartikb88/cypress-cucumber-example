Feature: The Calendar Test

  I want to verify the Angular Component Calendar

 @smoke
  Scenario: Entering value in calendar and checking its functionality
   Given I open Material Angular page
    Then I see "Components | Angular Material" in the title
    And I click on Calendar Component
    Then I verify the Calendar Component for existance
    Then I enter the Calendar date as today and verify the entered date
