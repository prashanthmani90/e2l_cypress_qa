class checkoutPage {
  elements = {
    cartBtn: () => cy.get("[data-cart-preview]"),
    checkoutBtn: () => cy.get("[data-primary-checkout-now-action]"),
    addToCartBtn: () => cy.get("[data-button-type=add-cart]"),
  };

  // Button Action
  clickOnCartBtn() {
    this.elements.cartBtn().click();
  }

  // Button Action
  clickOnCheckOutBtn() {
    this.elements.checkoutBtn().first().click(); // Since we have open cart popup window, checkout btn might be present twice
  }

  // Sequence of Activity Carried to Enter Details - Shipping Details (Email, Agree to Policy, Address where Product to be Shipped)
  enterShippingDetails() {
    cy.get("[name=email]").type("test@example.com");
    cy.get(".form-fieldset.checkout-privacy-policy").click();
    cy.get("[data-test=customer-continue-as-guest-button]").click();
    cy.wait(1000);
    cy.get("[data-test=customer-guest-continue]").click();
    cy.wait(1000);
    cy.get("[data-test=countryCodeInput-select]").select("United Kingdom");
    cy.get("[data-test=firstNameInput-text]").type("Firstname");
    cy.get("[data-test=lastNameInput-text]").type("Lastname");
    cy.get("[data-test=addressLine1Input-text]").type("Address");
    cy.get("[data-test=cityInput-text]").scrollIntoView();
    cy.wait(1000);
    cy.get("[data-test=cityInput-text]").type("City");
    //cy.get("[data-test=provinceCodeInput-text]").select("London"); // Optional
    cy.get("[data-test=postCodeInput-text]").scrollIntoView();
    cy.wait(1000);
    cy.get("[data-test=postCodeInput-text]").type("12345");
    cy.get("[data-test=phoneInput-text]").type("5555555555");
    cy.wait(4000); // Wait to Complete Loading
    cy.get("#checkout-shipping-continue").click();
    cy.wait(1000);
  }

  // equence of Activity Carried to Enter Details - Card Details and Completing on Placing Order
  enterCardDetails() {
    cy.get("[name=ccNumber]").scrollIntoView();
    cy.wait(1000);
    //cy.get("[data-test=submit-shipping-method]").click();
    cy.get("[name=ccNumber]").type("4111 1111 1111 1111");
    cy.get("[name=ccExpiry]").type("12/23");
    cy.get("[name=ccName]").type("FirstName LastName");
    cy.get("[name=ccCvv]").type("123");
    cy.get("#checkout-payment-continue").scrollIntoView();
    cy.wait(4000); // Wait to Complete Loading
    cy.get("#checkout-payment-continue").click();
    cy.wait(1000);
  }
}

module.exports = new checkoutPage();
