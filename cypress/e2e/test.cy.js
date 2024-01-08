import * as jolly from "../fixtures/jollybyte.json";

describe("Test the functionalities of the website", () => {
  beforeEach(() => {
    cy.visit("https://jollybyte.vercel.app/home");
    cy.get('[class="chakra-image css-1domaf0"]')
      .eq(0)
      .should("be.visible")
      .should("have.attr", "src", "./images/jollybyte-logo.svg");
  });

  it("Check the Menu", () => {
    cy.get("button[class='chakra-button css-vi8lg3']")
      .contains(jolly.menu["menu-btn"])
      .click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get('[class="chakra-heading css-1dklj6k"]')
      .contains(jolly.menu.heading)
      .should("be.visible");
    cy.get('[class="chakra-fade"]').should("have.length", 15);

    cy.get('[class="chakra-text css-pelz90"]')
      .contains(jolly.menu.food1)
      .click();
    cy.get('[class="chakra-fade"]').should("have.length", 6);

    cy.get('[class="chakra-text css-pelz90"]')
      .contains(jolly.menu.food2)
      .click();
    cy.get('[class="chakra-fade"]').should("have.length", 3);

    cy.get('[class="chakra-text css-pelz90"]')
      .contains(jolly.menu.food3)
      .click();
    cy.get('[class="chakra-fade"]').should("have.length", 6);
  });

  it("Add an order", () => {
    cy.get("button[class='chakra-button css-vi8lg3']")
      .contains(jolly.menu["menu-btn"])
      .click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get('[class="chakra-heading css-1dklj6k"]')
      .contains(jolly.menu.heading)
      .should("be.visible");

    cy.get('[class="chakra-image css-11jlpvc"]')
      .eq(0)
      .should("have.attr", "src", "./images/burgers/burger_1.jpg");
    cy.get('[class="chakra-heading css-18j379d"]')
      .eq(0)
      .should("contain", jolly.orders.meal1);
    cy.get('[class="chakra-text css-69rcb0"]')
      .contains(jolly.orders["add-order"])
      .eq(0)
      .click();

    cy.get('[class="chakra-image css-11jlpvc"]')
      .eq(3)
      .should("have.attr", "src", "./images/wraps/wrap_6.jpg");
    cy.get('[class="chakra-heading css-18j379d"]')
      .eq(6)
      .should("contain", jolly.orders.meal2);
    cy.get('[class="chakra-button css-177wssd"]')
      .should("contain", jolly.orders["add-order"])
      .eq(3)
      .click();

    cy.get('[class="chakra-text css-0"]')
      .contains(jolly.orders["order-btn"])
      .click();
    cy.get('[class="chakra-stack css-zwtemy"]').should("have.length", 2);
    cy.get('[class="chakra-heading css-3a5uut"]')
      .should("contain", jolly.orders.meal1)
      .should("contain", jolly.orders.meal2);
    cy.get('[class="chakra-button css-1loawuf"]')
      .contains(jolly.orders.purchase)
      .click();
    cy.get('[role="alert"]')
      .contains(jolly.orders["procesing-order"])
      .should("be.visible");
  });

  it("Remove an item from the order", () => {
    cy.get("button[class='chakra-button css-vi8lg3']")
      .contains(jolly.menu["menu-btn"])
      .click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    //Adding an order
    cy.get('[class="chakra-image css-11jlpvc"]')
      .eq(0)
      .should("have.attr", "src", "./images/burgers/burger_1.jpg");
    cy.get('[class="chakra-heading css-18j379d"]')
      .eq(0)
      .should("contain", jolly.orders.meal1);
    cy.get('[class="chakra-text css-69rcb0"]')
      .contains(jolly.orders["add-order"])
      .eq(0)
      .click();

    cy.get('[class="chakra-image css-11jlpvc"]')
      .eq(3)
      .should("have.attr", "src", "./images/wraps/wrap_6.jpg");
    cy.get('[class="chakra-heading css-18j379d"]')
      .eq(6)
      .should("contain", jolly.orders.meal2);
    cy.get('[class="chakra-button css-177wssd"]')
      .should("contain", jolly.orders["add-order"])
      .eq(3)
      .click();

    cy.get('[class="chakra-text css-0"]')
      .contains(jolly.orders["order-btn"])
      .click();
    cy.get('[class="chakra-stack css-zwtemy"]').should("have.length", 2);
    cy.get('[class="chakra-heading css-3a5uut"]')
      .should("contain", jolly.orders.meal1)
      .should("contain", jolly.orders.meal2);

    //Removing an order
    cy.get('[class="chakra-button css-1t7w5yy"]')
      .should("be.visible")
      .eq(0)
      .click();
    cy.get('[class="chakra-stack css-zwtemy"]').should("have.length", 1);
    cy.get('[class="chakra-heading css-3a5uut"]').should(
      "not.contain",
      jolly.orders.meal1
    );
  });

  it('Check "about"', () => {
    cy.get('[class="chakra-text css-1fzuog9"]')
      .contains(jolly.about["about-btn"])
      .click();
    cy.get('[class="chakra-heading css-1dklj6k"]')
      .should("contain", jolly.about.heading[1])
      .should("contain", jolly.about.heading[2])
      .should("contain", jolly.about.heading[3])
      .should("be.visible");
  });

  it('Check "app"', () => {
    cy.get('[class="chakra-text css-1fzuog9"]')
      .contains(jolly.app["app-btn"])
      .click();
    cy.get('[class="chakra-button css-1loawuf"]')
      .should("be.visible")
      .should("contain", jolly.app.download)
      .click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it('Check the functionality of "home"', () => {
    cy.get('[class="chakra-text css-1fzuog9"]')
      .contains(jolly.about["about-btn"])
      .click();

    cy.get('[class="chakra-text css-1fzuog9"]')
      .contains(jolly.home["home-btn"])
      .click();
    cy.get('[class="css-1xfs1n8"]').should("be.visible");
  });

  it('Check if clicking on the "Jollybyte" logo sends you on the home page', () => {
    cy.get('[class="chakra-text css-1fzuog9"]')
      .contains(jolly.app["app-btn"])
      .click();

    cy.get('[class="chakra-image css-1domaf0"]')
      .eq(0)
      .should("be.visible")
      .should("have.attr", "src", "./images/jollybyte-logo.svg")
      .click();
    cy.get('[class="css-1xfs1n8"]').should("be.visible");
  });

  it("Scroll through popular orders", () => {
    cy.get('[class="chakra-heading css-1jb3vzl"]')
      .contains(jolly.popular.heading)
      .scrollIntoView({ duration: 1000 });

    cy.toBeInViewport('[class="chakra-heading css-97zroc"]').contains(
      jolly.popular.meal
    );

    cy.get('[class="chakra-icon slick-arrow slick-next css-vji626"]')
      .should("be.visible")
      .click();
    cy.get('[class="chakra-heading css-97zroc"]')
      .contains(jolly.popular.meal)
      .should("not.be.visible");
  });
});
