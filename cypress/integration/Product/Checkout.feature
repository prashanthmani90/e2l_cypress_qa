Feature: Checkout process
    As a customer
    I want to be able to search for a product and add it to my cart
    So that I can complete the checkout process

  Scenario: Search for a product and add it to the cart
    Given I am on the homepage
    When I search for "Basket"
    And I add the first result to the cart
    And I go to the cart page
    Then the cart should contain one item
    When I complete the checkout process
    Then the order should be completed successfully