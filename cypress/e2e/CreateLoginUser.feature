Feature: Create a new user and log in and out with it

  Scenario Outline: Negative User registration - <test_name>
    Given I am on the home page
    When Press Sign Up
    When Fill in "<username>" and "<password>" in Create user form
    And Submit the form by clicking Sign up
    Then Pop up saying "<error>" is shown in Create user form
    Examples:
      | test_name     | username        | password        | error                                  |
      | No Username   |                 | password        | Please fill out Username and Password. |
      | No Password   | userName        |                 | Please fill out Username and Password. |
      | Existing User | labaslabaslabas | labaslabaslabas | This user already exist.               |
#      | New User    | newUserName | newPassword | Sign up successful.                    |


  Scenario Outline: Negative User login - <test_name>
    Given I am on the home page
    When Press Log in
    When Fill in "<username>" and "<password>" in Log in form
    And Submit the form by clicking Log in
    Then Pop up saying "<error>" is shown in Log in form
    Examples:
      | test_name     | username       | password       | error                                  |
      | No Username   |                | password       | Please fill out Username and Password. |
      | No Password   | userName       |                | Please fill out Username and Password. |
      | Existing User | bvknbkbbvknbkb | bvknbkbbvknbkb | User Does not exist.                   |


  Scenario Outline: Positive User log in and log out
    Given I am on the home page
    When Press Log in
    When Fill in "<user>" in Log in form
    And Submit the form by clicking Log in
    And Check if UserName is visible
    And Click on Log out
    Then Check if UserName is invisible
    Examples:
      | user      |
      | ValidUser |
