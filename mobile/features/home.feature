
Feature: Android sample app

  Scenario Outline: As a user, I see investinments

    Given I am on the login view
    When I tap investinments
    Then I should see a message saying <message>

    Examples:
      | message                    |
      | Distribución del portfolio |

  Scenario Outline: As a user, I see deposit

  When I am tap init
  When I tap deposit
  Then I should see a message saying <message>

  Examples:
    | message                    |
    | ¿Qué vas a ingresar?       |