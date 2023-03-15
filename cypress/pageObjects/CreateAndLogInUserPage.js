import { BaseCommands } from "./BaseCommands";

const SIGN_IN_BUTTON = "#signin2";
const SIGN_UP_USERNAME_FIELD = "#sign-username";
const SIGN_UP_PASSWORD_FIELD = "#sign-password";
const SUBMIT_BUTTON = ".btn-primary";
const LOG_IN_BUTTON = "#login2";
const LOG_IN_USERNAME_FIELD = "#loginusername";
const LOG_IN_PASSWORD_FIELD = "#loginpassword";

export class CreateAndLogInUserPage extends BaseCommands {
  static visitHomePage() {
    cy.visit("/");
  }

  static pressSignUp() {
    cy.get(SIGN_IN_BUTTON).click();
  }

  static inputUserNameAndPasswordSignUp(username, password) {
    if (username !== "") {
      this.type(SIGN_UP_USERNAME_FIELD, username);
    }
    if (password !== "") {
      this.type(SIGN_UP_PASSWORD_FIELD, password);
    }
  }

  static pressSubmitButtonSignUp() {
    cy.get(SUBMIT_BUTTON).contains("Sign up").click();
  }

  static validateErrorMessageSignUp(errorMessage) {
    this.pressSubmitButtonSignUp();
    cy.on("window:alert", (message) => {
      expect(message).to.equal(errorMessage);
    });
  }

  static pressLogIn() {
    cy.get(LOG_IN_BUTTON).click();
  }

  static inputUserNameAndPasswordLogIn(username, password) {
    if (username !== "") {
      this.type(LOG_IN_USERNAME_FIELD, username);
    }
    if (password !== "") {
      this.type(LOG_IN_PASSWORD_FIELD, password);
    }
  }

  static pressSubmitButtonLogIn() {
    cy.get(SUBMIT_BUTTON).contains("Log in").click();
  }

  static validateErrorMessageLogIn(errorMessage) {
    this.pressSubmitButtonLogIn();
    cy.on("window:alert", (message) => {
      expect(message).to.equal(errorMessage);
    });
  }

  static InputValidUser(user) {
    cy.fixture("users").then((fixture) => {
      if (fixture[user].UserName !== undefined) {
        this.type(LOG_IN_USERNAME_FIELD, fixture[user].UserName);
      }
      if (fixture[user].Password !== undefined) {
        this.type(LOG_IN_PASSWORD_FIELD, fixture[user].Password);
      }
    });
  }
}
