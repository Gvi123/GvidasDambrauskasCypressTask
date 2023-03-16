const { Given, When, Then, } = require("@badeball/cypress-cucumber-preprocessor");
const { CreateAndLogInUserPage, } = require("../../pageObjects/CreateAndLogInUserPage");
const { AddProductPage } = require("../../pageObjects/AddProductPage");


Given(/^The user has logged$/, function() {
  AddProductPage.logInUserWithoutUI();
});
Given(/^User clicks on the first item$/, function() {
  AddProductPage.clickOnTheFirstItem();
});
Given(/^User Press Add to cart button$/, function() {
  AddProductPage.clickOnAddToCart();
});
Given(/^User goes to the cart page$/, function() {
  AddProductPage.userGoesToCart();
});
Then(/^The last added item is visible in the cart$/, function() {
  AddProductPage.lastItemIsVisibleInTheCart();
});
Given(/^User clicks on the Laptops category$/, function() {
  AddProductPage.laptopsCategory();
});
Given(/^User adds all laptops to the cart on the first page$/, function() {
  AddProductPage.addAllItemsToTheCartonFirstPage();
});
Given(/^User goes to next page$/, function() {
  AddProductPage.userGoesToNextPage();
});
Given(/^User adds all laptops to the cart on the next page$/, function() {
  AddProductPage.addAllItemsToTheCartonNextPage();
});