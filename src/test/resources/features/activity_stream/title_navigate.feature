Feature: As a user, I should be able to see the correct titles when I navigate to corresponding modules under
  My Workspace

@Tasks
  Scenario Outline: Verify the module title as the same left menu bar of the page.
    Given user is on the landing page
    When "<user>" logs in
    And click on Activity Stream
    Then user verifys the module title is Portal
    Then user quits
    Examples:
      |   user    |
      | marketing |

