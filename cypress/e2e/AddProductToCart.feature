Feature: Products page test cases

  Scenario: Adding an item to the cart
    Given The user has logged
    And User clicks on the first item
    And User Press Add to cart button
    And User goes to the cart page
    Then The last added item is visible in the cart

@only
  Scenario: Adding all available laptops to the cart, checking the total price and placing an order
    Given The user has logged
    And User adds all laptops to the cart on the first page
    And Checking if total price is correct
  And User clicks Place Order button
  And User fills Place Order form and clicks Purchase
  Then Purchase completed



