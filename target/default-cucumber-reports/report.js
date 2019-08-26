$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/activity_stream/title_navigate.feature");
formatter.feature({
  "name": "As a user, I should be able to see the correct titles when I navigate to corresponding modules under",
  "description": "  My Workspace",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify the module title as the same left menu bar of the page.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tasks"
    }
  ]
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "\"\u003cuser\u003e\" logs in",
  "keyword": "When "
});
formatter.step({
  "name": "click on Activity Stream",
  "keyword": "And "
});
formatter.step({
  "name": "user verifys the module title is Portal",
  "keyword": "Then "
});
formatter.step({
  "name": "user quits",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user"
      ]
    },
    {
      "cells": [
        "marketing"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the module title as the same left menu bar of the page.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tasks"
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
  "name": "\"marketing\" logs in",
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinitions.logs_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Activity Stream",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyPageTitle.click_on_Activity_Stream()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifys the module title is Portal",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyPageTitle.user_verifys_the_module_title_is_Portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user quits",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_quits()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});