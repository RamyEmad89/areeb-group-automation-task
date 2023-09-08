describe("Sauce Demo Automation", () => {
  it("should log in, and add items to cart, checkout, logout", () => {
    // Visit the Sauce Demo website
    cy.visit("https://www.saucedemo.com/?123");
    cy.wait(3000);

    // Login with valid credentials
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Add items to the cart
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".inventory_item").eq(1).find(".btn_inventory").click();

    // Go to the shopping cart
    cy.get(".shopping_cart_link").click();

    // Checkout
    cy.get("#checkout").click();
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");
    cy.get(".cart_button").click();
    cy.wait(2000);
    cy.get("#finish").click();
    cy.wait(2000);
    cy.get("#back-to-products").click();

    // Logout
    cy.wait(2000);
    cy.get("#react-burger-menu-btn").click();
    cy.wait(2000);
    cy.get("#logout_sidebar_link").click();
  });
});
