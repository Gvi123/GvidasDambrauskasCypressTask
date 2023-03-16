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