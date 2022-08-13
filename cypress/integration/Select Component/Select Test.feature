Feature: The Select Component Test

  I want to verify the select Component functionality

  Scenario Outline: Getting  values Dynamically using Excel and checking Select functionality
   Given I open Material Angular page
    Then I see "Components | Angular Material" in the title
    And I click on Select Component 
    Then I Select the '<Favorite_food>' and '<Favorite_car>' and verify the selection
    Examples:
    | Favorite_food   | Favorite_car |
    | Pizza           | Volvo |
    | Steak           | Mercedes |
    



