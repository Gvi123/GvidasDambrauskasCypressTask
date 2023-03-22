import { BaseCommands } from "./BaseCommands";

const ITEM_NAME = ".hrefch";
const ADD_TO_CART_BUTTON = ".btn-lg";
const SHOPPING_CART_PAGE = "#cartur";
const SUBMIT_BUTTON = ".btn-primary";
const MONITORS_CATEGORY = `[onclick="byCat('monitor')"]`;
const NEXT_PAGE = "#next2";
const ITEM_IN_SHOPPING_CART = ".success td";
const EACH_ITEM_IN_SHOPPING_CART = ".table-striped td";
const PLACE_ORDER_BUTTON = ".btn-success";
const PLACE_OREDER_POP_UP = "#orderModalLabel";
const PLACE_ORDER_NAME_FIELD = "#name";
const PLACE_ORDER_COUNTRY_FIELD = "#country";
const PLACE_ORDER_CITY_FIELD = "#city";
const PLACE_ORDER_CREDIT_CARD_FIELD = "#card";
const PLACE_ORDER_MONTH_FIELD = "#month";
const PLACE_ORDER_YEAR_FIELD = "#year";
const SUCCESFUL_MESSAGE_AFTER_PURCHASE = ".sweet-alert > h2";
const TOTAL_PRICE = "#totalp";

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
      cy.get(ITEM_IN_SHOPPING_CART).eq(1).should("have.text", itemName);
    });
    // deleting added item, so next Test case would be clear
    cy.get(".success > :nth-child(4) > a").click();
  }

  static laptopsCategory() {
    cy.get(MONITORS_CATEGORY).click();
  }

  static addAllItemsToTheCartonFirstPage() {
    cy.get(MONITORS_CATEGORY).click();
    cy.get(ITEM_NAME).should("have.length", 2);
    cy.get(ITEM_NAME).each(($el, index, $list) => {
      // Call the function for each element
      this.addAllItems(index);
    });
  }

  static validateTotalPrice() {
    this.userGoesToCart();
    cy.wait(2000);
    let prices = [];
    let numb = 0;
    cy.get(EACH_ITEM_IN_SHOPPING_CART).each(($el, index, $list) => {
      prices[index] = $el.text();
    }).then(() => {
      let i;
      for (i = 1; i < prices.length; i++) {
        if (Number(prices[i])) {
          numb += Number(prices[i]);
          cy.log(numb);
        }
      }
      cy.get(TOTAL_PRICE).should("have.text", numb);
    });
  }

  static clickPlaceOrderButton() {
    cy.get(PLACE_ORDER_BUTTON).click();
    this.isVisible(PLACE_OREDER_POP_UP);
  }

  static fillingUpPlaceOrderForm() {
    this.type(PLACE_ORDER_NAME_FIELD, "labas");
    this.type(PLACE_ORDER_COUNTRY_FIELD, "Lithuania");
    this.type(PLACE_ORDER_CITY_FIELD, "Vilnius");
    this.type(PLACE_ORDER_CREDIT_CARD_FIELD, "4444 1111 2222 3333");
    this.type(PLACE_ORDER_MONTH_FIELD, "August");
    this.type(PLACE_ORDER_YEAR_FIELD, "2023");
    cy.get(SUBMIT_BUTTON).contains("Purchase").click();
  }

  static purchaseCompleted() {
    this.hasText(SUCCESFUL_MESSAGE_AFTER_PURCHASE, "Thank you for your purchase!");
  }
}