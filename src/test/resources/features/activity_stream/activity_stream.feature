
  @Tasks
  Feature: As a user I should be able to create a task from activity stream.
                          #and image or link or add checklist
    Scenario:  user can upload a file regarding to new task
      Given user is on the landing page
      Then user goes to task module
      Then  clicks to upload files
      And selects a document from bitrix
      And go to sales and marketing folder
      Then opens Quotes folder
      And click on the document to add
      And adds things to do
      And user verifies that file was added
      Then user quits




