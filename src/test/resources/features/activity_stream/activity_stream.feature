

  Feature: As a user I should be able to create a task from activity stream.

    Scenario Outline:  user can upload a file regarding to new task
      Given user is on the landing page
      When "<user>" logs in
      Then user goes to task module
      And adds things to do
      And click on checklist
      And adds things to do
      Then click on send button
      And user verifies that file was added
      Then user quits
      Examples:
        |   user    |
        |    hr     |
        | marketing |
        | helpdesk  |


#and image or link or add checklist


