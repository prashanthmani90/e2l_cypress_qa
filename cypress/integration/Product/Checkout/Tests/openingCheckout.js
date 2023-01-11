import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import HomePage from "../Pages/HomePage/HomePage";


Given("I am on the homepage", () => {
  HomePage.homeUrl();
});

When("I search for {string}", (searchTerm) => {
  HomePage.clickOnSearchBtnOnMenu();
  HomePage.search(searchTerm);
});

And("I add the first result to the cart", () => {
  cy.get(".card-figure").trigger("mouseover");
  cy.get(".card-figcaption-body").should("be.visible"); // Check Mouse Over Triggers the Popup visible on UI
  cy.screenshot("SearchResult");
  HomePage.clickOnAddToCart();
});

And("I go to the cart page", () => {
  CheckoutPage.clickOnCartBtn();
  cy.wait(1000);
  CheckoutPage.clickOnCheckOutBtn();
});

Then("the cart should contain one item", () => {
  cy.get(".productList li").should("have.length", 1); // Checking Cart have only one item
  cy.screenshot("CartItems")
});
When("I complete the checkout process", () => {
  CheckoutPage.enterShippingDetails();
  CheckoutPage.enterCardDetails();
});

Then("the order should be completed successfully", () => {
  cy.get("[data-test=order-confirmation-heading]").contains("Thank you");
  cy.screenshot("OrderCompletion");
});
