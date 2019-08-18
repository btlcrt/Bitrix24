$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\activity_stream\\activity_stream.feature");
formatter.feature({
  "name": "As a user I should be able to create a task from activity stream.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Tasks"
    }
  ]
});
formatter.scenario({
  "name": "user can upload a file regarding to new task",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Tasks"
    },
    {
      "name": "@B24"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to task module",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.user_goes_to_task_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on checklist",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_checklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on send button",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_send_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that file was added",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.user_verifies_that_file_was_added()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[19:45]\u003e but was:\u003c[today, 07:45 pm]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cybertek.step_definitions.TasksStepDefinitions.user_verifies_that_file_was_added(TasksStepDefinitions.java:55)\r\n\tat ✽.user verifies that file was added(src\\test\\resources\\features\\activity_stream\\activity_stream.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user quits",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_quits()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});