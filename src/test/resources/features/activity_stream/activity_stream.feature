
  @Tasks
  Feature: As a user I should be able to create a task from activity stream.
    @B24
    Scenario:  user can upload a file regarding to new task
      Given user is on the landing page
      Then user goes to task module
      And adds things to do
      And click on checklist
      And adds things to do
      Then click on send button
      And user verifies that file was added
      Then user quits

#and image or link or add checklist


