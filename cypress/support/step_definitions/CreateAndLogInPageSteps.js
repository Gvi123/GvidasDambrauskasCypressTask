const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  CreateAndLogInUserPage,
} = require("../../pageObjects/CreateAndLogInUserPage");
Given(/^I am on the home page$/, function () {
  CreateAndLogInUserPage.visitHomePage();
});
When(/^Press Sign Up$/, function () {
  CreateAndLogInUserPage.pressSignUp();
});
When(
  /^Fill in "([^"]*)" and "([^"]*)" in Create user form$/,
  function (username, password) {
    CreateAndLogInUserPage.inputUserNameAndPasswordSignUp(username, password);
  }
);
When(/^Submit the form by clicking Sign up$/, function () {
  CreateAndLogInUserPage.pressSubmitButtonSignUp();
});
Then(
  /^Pop up saying "([^"]*)" is shown in Create user form$/,
  function (errorMessage) {
    CreateAndLogInUserPage.validateErrorMessageSignUp(errorMessage);
  }
);
When(
  /^Fill in "([^"]*)" and "([^"]*)" in Log in form$/,
  function (username, password) {
    CreateAndLogInUserPage.inputUserNameAndPasswordLogIn(username, password);
  }
);
When(/^Press Log in$/, function () {
  CreateAndLogInUserPage.pressLogIn();
});
When(/^Submit the form by clicking Log in$/, function () {
  CreateAndLogInUserPage.pressSubmitButtonLogIn();
});
When(
  /^Pop up saying "([^"]*)" is shown in Log in form$/,
  function (errorMessage) {
    CreateAndLogInUserPage.validateErrorMessageLogIn(errorMessage);
  }
);
When(/^Fill in "([^"]*)" in Log in form$/, function (user) {
  CreateAndLogInUserPage.InputValidUser(user);
});
Then(/^Check if UserName is visible$/, function () {
  CreateAndLogInUserPage.checkUserName();
});
When(/^Click on Log out$/, function() {
  CreateAndLogInUserPage.clickLogOutButton();
});
Then(/^Check if UserName is invisible$/, function() {
  CreateAndLogInUserPage.checkUserNameInvisible();
});
