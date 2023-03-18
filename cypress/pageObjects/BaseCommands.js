const ITEM_NAME = ".hrefch";
const ADD_TO_CART_BUTTON = ".btn-lg";
const SHOPPING_CART_PAGE = "#cartur";
const LAPTOPS_CATEGORY = `[onclick="byCat('notebook')"]`;
const NEXT_PAGE = "#next2"

export class BaseCommands {
  static click(selector) {
    cy.get(selector).click();
  }

  static clickFirst(selector) {
    cy.get(selector).first().click();
  }

  static clickAll(selector) {
    cy.get(selector).click({ multiple: true });
  }

  static type(selector, text) {
    cy.get(selector).type(text);
  }

  static hasText(selector, text) {
    cy.get(selector).should("have.text", text).and("be.visible");
  }

  static isVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  static doesNotExist(selector) {
    cy.get(selector).should("not.exist");
  }

  static addAllItems(number) {
    cy.get(ITEM_NAME).eq(number).click();
    cy.get(ADD_TO_CART_BUTTON).click();
    cy.visit("/")
    cy.get(LAPTOPS_CATEGORY).click();
    // cy.wait(500)
  }
  static addAllItemsInNextPage(number) {
    cy.get('.active > .nav-link').click();
    cy.get(LAPTOPS_CATEGORY).click();
    cy.wait(500)
    cy.get(NEXT_PAGE).click()
    cy.wait(500)
    cy.get(ITEM_NAME).eq(number).click();
    cy.get(ADD_TO_CART_BUTTON).click();
  }
}
