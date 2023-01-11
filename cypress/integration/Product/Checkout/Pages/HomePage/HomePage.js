//class HomePage {

// enterUserNamePassword(username, password) {
//   cy.contains("Sign in").click();

//   cy.get("#email").clear();

//   cy.get("#email").type(username);

//   cy.get("#passwd").clear();

//   cy.get("#passwd").type(password);

//   return this;
// }

// clickOnSignInButton() {
//   return cy.get("#SubmitLogin").click();
// }

// verifyPageTitle() {
//   return cy.title().should("eq", "My account — My Store");
// }

// validateErrorMessage(errorMessage) {
//   return cy.contains(errorMessage);
// }
//}

//const homePage = new HomePage();

//export default homePage;

class homePage {
  homeUrl() {
    cy.visit("https://cornerstone-light-demo.mybigcommerce.com");
  }
  elements = {
    searchBtn: () => cy.get("#quick-search-expand"),
    searchBox: () => cy.get("#nav-quick-search"),
    addToCartBtn: () => cy.get("[data-button-type=add-cart]"),
  };

  // Button Action
  clickOnSearchBtnOnMenu() {
    this.elements.searchBtn().click();
  }

  // Search is combination of action, view the search Box and Type given Text and Press Enter (Action Item)
  search(param) {
    this.elements.searchBox().should("be.visible"); // Search Box is Visible only After Clicking on Search Menu Tab
    this.elements.searchBox().type(param + "{enter}");
  }

  // Button Action
  clickOnAddToCart() {
    this.elements.addToCartBtn().click();
  }
}

module.exports = new homePage();
