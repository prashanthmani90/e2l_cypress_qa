# e2x_cypress_qa
Cypress Automation with Cucumber

#How to run

npm install
npm test

#View Cypress

npm run cypress:open

Run all specs

### Requirement:
Please write the test, ensure that it works and come to the face to face review, prepared to: - execute the test and review the results
- discuss your general approach
- use of classes and methods - page object model
- any assertions made along the way and why
- any necessary logic in the code to wait for an event or to drive the test flow

### Feature:

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

### Page Object Modal 

Added Two Modals for HomePage and CheckoutPage

