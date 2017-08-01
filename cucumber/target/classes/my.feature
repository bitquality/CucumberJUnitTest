Feature: Test scotia login
  Scenario: valid username and valid password
    Given Scotia Login Page
    When i See username
    And password
    Then Enter username and password
    And click on login button
