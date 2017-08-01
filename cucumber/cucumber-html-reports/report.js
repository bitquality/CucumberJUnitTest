$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("my.feature");
formatter.feature({
  "line": 1,
  "name": "Test scotia login",
  "description": "",
  "id": "test-scotia-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "valid username and valid password",
  "description": "",
  "id": "test-scotia-login;valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Scotia Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i See username",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.scotia_Login_Page()"
});
formatter.result({
  "duration": 366011655,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_See_username()"
});
formatter.result({
  "duration": 31210,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.password()"
});
formatter.result({
  "duration": 27655,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.enter_usrename_and_password()"
});
formatter.result({
  "duration": 27260,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_on_login_button()"
});
formatter.result({
  "duration": 35160,
  "status": "passed"
});
});