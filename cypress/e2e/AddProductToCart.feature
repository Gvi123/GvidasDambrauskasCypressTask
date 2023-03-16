Feature: Products page test cases

  Scenario: Adding an item to the cart
    Given The user has logged
    And User clicks on the first item
    And User Press Add to cart button
    And User goes to the cart page
    Then The last added item is visible in the cart