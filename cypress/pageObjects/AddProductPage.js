import { BaseCommands } from "./BaseCommands";

const ITEM_NAME = ".hrefch";
const ADD_TO_CART_BUTTON = ".btn-lg";
const SHOPPING_CART_PAGE = "#cartur";

export class AddProductPage extends BaseCommands {

  static logInUserWithoutUI() {
    cy.setCookie("user", "bc3109d5-f574-b1c2-f6e8-668d8f011eb6");
    cy.setCookie("tokenp_", "bGFiYXMxNjc5NTgx");
    cy.visit("/", { failOnStatusCode: false });

  }

  static clickOnTheFirstItem() {
    cy.get(ITEM_NAME)
      .first()
      .then((element) => {
        cy.wrap(element.text()).as("lastAddedItemName");
      });
    cy.get(ITEM_NAME).first().click();
    console.log("@lastAddedItemName");

  }

  static clickOnAddToCart() {
    cy.get(ADD_TO_CART_BUTTON).click();
  }

  static userGoesToCart() {
    cy.get(SHOPPING_CART_PAGE).click();
  }

  static lastItemIsVisibleInTheCart() {
    cy.get("@lastAddedItemName").then((itemName) => {
      cy.get(".success td").eq(1).should("have.text", itemName);
    });
    // deleting added item, so next Test case would be clear
    cy.get(".success > :nth-child(4) > a").click();
  }
}