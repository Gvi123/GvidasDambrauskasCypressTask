const ITEM_NAME = ".hrefch";
const ADD_TO_CART_BUTTON = ".btn-lg";
const SHOPPING_CART_PAGE = "#cartur";
const MONITORS_CATEGORY = `[onclick="byCat('monitor')"]`;
const NEXT_PAGE = "#next2";

export class BaseCommands {
  static type(selector, text) {
    cy.get(selector).type(text);
  }

  static hasText(selector, text) {
    cy.get(selector).should("have.text", text).and("be.visible");
  }

  static isVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  static addAllItems(number) {
    cy.get(ITEM_NAME).eq(number).click();
    cy.get(ADD_TO_CART_BUTTON).click();
    cy.visit("/");
    cy.get(MONITORS_CATEGORY).click();
  }
}
