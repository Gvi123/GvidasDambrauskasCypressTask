import { BaseCommands } from "./BaseCommands";

const ITEM_NAME = ".hrefch";
const ADD_TO_CART_BUTTON = ".btn-lg";
const SHOPPING_CART_PAGE = "#cartur";
const LAPTOPS_CATEGORY = `[onclick="byCat('notebook')"]`;
const NEXT_PAGE = "#next2"

export class AddProductPage extends BaseCommands {

  static logInUserWithoutUI() {
    cy.setCookie("user", "bc3109d5-f574-b1c2-f6e8-668d8f011eb6");
    cy.setCookie("tokenp_", "bGFiYXMxNjc5NTgx");
    cy.visit("/", { failOnStatusCode: false });

  }

  static clickOnTheFirstItem() {
    cy.get(ITEM_NAME)
      .eq(0)
      .then((element) => {
        cy.wrap(element.text()).as("lastAddedItemName");
      });
    cy.get(ITEM_NAME).eq(0).click();
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

  static laptopsCategory() {
    cy.get(LAPTOPS_CATEGORY).click();
  }

  static addAllItemsToTheCartonFirstPage() {
    cy.wait(2000)
    cy.get('.active > .nav-link').click();
    cy.wait(2000)
    cy.get(LAPTOPS_CATEGORY).click();
    cy.wait(2000)
    cy.get(ITEM_NAME).should("have.length", 6);
    cy.get(ITEM_NAME).each(($el, index, $list) => {
      // Call the function for each element
      this.addAllItems(index)
    })


  }

  static userGoesToNextPage() {
    cy.wait(2000)
    cy.get('.active > .nav-link').click();
    cy.wait(2000)
    cy.get(LAPTOPS_CATEGORY).click();
    cy.wait(2000)
    cy.get(NEXT_PAGE).click()
    cy.wait(2000)
  }

  static addAllItemsToTheCartonNextPage() {
    cy.wait(2000)
    cy.get('.active > .nav-link').click();
    cy.wait(2000)
    cy.get(LAPTOPS_CATEGORY).click();
    cy.wait(2000)
    cy.get(NEXT_PAGE).click()
    cy.wait(2000)
    cy.get(ITEM_NAME).each(($el, index, $list) => {
      // Call the function for each element
      this.addAllItemsInNextPage(index)
    })
  }

}