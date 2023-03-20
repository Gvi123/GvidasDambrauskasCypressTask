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
Given(/^Checking if total price is correct$/, function() {
  AddProductPage.validateTotalPrice();
});
Given(/^User clicks Place Order button$/, function() {
  AddProductPage.clickPlaceOrderButton();
});
Given(/^User fills Place Order form and clicks Purchase$/, function() {
  AddProductPage.fillingUpPlaceOrderForm();

});
Then(/^Purchase completed$/, function() {
  AddProductPage.purchaseCompleted();
});