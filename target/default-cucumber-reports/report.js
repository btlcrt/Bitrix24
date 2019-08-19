$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/activity_stream/activity_stream.feature");
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
formatter.scenarioOutline({
  "name": "user can upload a file regarding to new task",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "user goes to task module",
  "keyword": "Then "
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.step({
  "name": "click on checklist",
  "keyword": "And "
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.step({
  "name": "click on send button",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifies that file was added",
  "keyword": "And "
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
        "hr"
      ]
    },
    {
      "cells": [
        "marketing"
      ]
    },
    {
      "cells": [
        "helpdesk"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user can upload a file regarding to new task",
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
  "name": "\"hr\" logs in",
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinitions.logs_in(String)"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003ctoday, [15:18 PM]\u003e but was:\u003ctoday, [03:18 pm]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.cybertek.step_definitions.TasksStepDefinitions.user_verifies_that_file_was_added(TasksStepDefinitions.java:66)\n\tat ✽.user verifies that file was added(src/test/resources/features/activity_stream/activity_stream.feature:13)\n",
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
formatter.scenario({
  "name": "user can upload a file regarding to new task",
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
  "name": "user goes to task module",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.user_goes_to_task_module()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span#feed-add-post-form-tab-tasks \u003e span\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Betuls-Air.attlocal.net\u0027, ip: \u00272600:1702:530:29c0:0:0:0:44%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/h3/lfyn6h9d2hd...}, goog:chromeOptions: {debuggerAddress: localhost:52095}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7c89173c5d6934cbb03fd3b354689fc0\n*** Element info: {Using\u003dcss selector, value\u003dspan#feed-add-post-form-tab-tasks \u003e span}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.cybertek.step_definitions.TasksStepDefinitions.user_goes_to_task_module(TasksStepDefinitions.java:29)\n\tat ✽.user goes to task module(src/test/resources/features/activity_stream/activity_stream.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on checklist",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_checklist()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on send button",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_send_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that file was added",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.user_verifies_that_file_was_added()"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user can upload a file regarding to new task",
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
  "name": "\"helpdesk\" logs in",
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinitions.logs_in(String)"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span#feed-add-post-form-tab-tasks \u003e span\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Betuls-Air.attlocal.net\u0027, ip: \u00272600:1702:530:29c0:0:0:0:44%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/h3/lfyn6h9d2hd...}, goog:chromeOptions: {debuggerAddress: localhost:52115}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 913414dc32f77a01e78dd365fb26b2ca\n*** Element info: {Using\u003dcss selector, value\u003dspan#feed-add-post-form-tab-tasks \u003e span}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.cybertek.step_definitions.TasksStepDefinitions.user_goes_to_task_module(TasksStepDefinitions.java:29)\n\tat ✽.user goes to task module(src/test/resources/features/activity_stream/activity_stream.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on checklist",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_checklist()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on send button",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_send_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that file was added",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.user_verifies_that_file_was_added()"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
});