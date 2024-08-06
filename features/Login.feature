@ui @login @smoke
Feature: Login related scenarios

  Scenarios related to login acceptance criteria

  @002 @wip
  Scenario: A user is able to login with his credentials
    Given I set the login credentials with:
      | Username | standard_user |
      | Password | secret_sauce  |
    When I try to login the application
    Then I should see the inventory page
    And I log out the application


  @003 @nodefinido
  Scenario: A user is able to login with his credentials
    Given I set the login credentials with:
      | Username | locked_out_user |
      | Password | secret_sauce    |
    When I try to login the application
    Then I should see the locked out error message

