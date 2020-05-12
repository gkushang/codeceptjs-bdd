---
title: Mocha-styled Acceptance Scenarios
sub_title: Write Mocha-styled classical acceptance scenarios
parents: ['Mocha-styled']
keywords: ['mocha', 'classical']
---

It is common to think that BDD scenario is equal to test. But it's actually not. Not every test should be described as a feature. Not every test is written to test real business value. For instance, regression tests or negative scenario tests are not bringing any value to business. Business analysts don't care about scenario reproducing bug #13, or what error message is displayed when user tries to enter wrong password on login screen. Writing all the tests inside a feature files creates informational overflow.

In CodeceptJS you can combine tests written in Gherkin format with classical acceptance tests. This way you can keep your feature files compact with minimal set of scenarios, and write regular tests to cover all cases. Please note, feature files will be executed before tests.

## Write Mocha Styled Acceptance Tests

With Codeceptjs-BDD Framework, you can opt to choose the mixed approach writing your Test Automation in both `BDD-styled` Gherkin Feature Files and/or `Mocha-styled` Classical Acceptance Scenarios.

This is the great feature CodeceptJS provides, and enables everyone to choose what is best suited for the application.

Codeceptjs-BDD provides a directory called `acceptance/mocha`, where you usually write your mocha-styled tests but you can change the location as required. It won't affect your configuration.

The mocha-style tests should have extention `*.spec.js` for default configuration to pick up and run the tests. However, if you decide to change the extention, e.g. `*.test.js`, then you can definitly do so by updatin your Projects configuration explained later in this section.

### Mocha-style specs

```javascript
// acceptance/mocha/login.spec

Feature('Login Tests (mocha)');

Scenario('Fred logs in successfully', I => {
  // your tests goes here
  I.amOnPage('/');
  I.see('Login');
})
  .tag('@login_mocha')
  .tag('smoke');
```

### Override the default \*.spec.js extention

If you decide to change the mocha-style scenarios extention to different than `*.spec.js`, then you are required to update your Projects configuration as shown below,

e.g. if you decide to have extention `*.test.js`, then add below line to your configuration,

```javascript
// in <project-path>/codecept.conf.js

let conf = {
  // other configuration will remain unchanged

  // add below line to the exiting configuration
  tests: process.env.CODECEPT_RELATIVE_PATH + '**/*.test.js',
};
```
