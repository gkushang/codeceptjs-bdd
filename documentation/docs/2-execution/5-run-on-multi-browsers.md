---
title: Run Parallel in Multiple Browsers
sub_title: Execute scen on Single browser locally
parents: ["Execution"]
---

## 🌀 Run Parallel on Multiple Browsers

Codecpetjs-BDD can run your tests in Multiple Browsers, including multiple versions of same brwoser or different browsers on different OS on Sauce Labs. Multiple Browsers executions give your test suites a broader test-execution-coverage. 

**Can I run my all scenarios on Multiple Browsers but all in Parallel?** Yes. You can run all Scenarios in Parallel. If you have 100 scenarios, and if you want to cover three different browsers, e.g. Microsoft Edge, Safari, Chrome, then Codeceptjs-BDD will trigger 300 concurrent threads that all run in Parallel on all three defined browsers.

## 🎥 Watch in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/njOlOJ07Dxw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

## How to run Scenarios Parallel in Multiple Browsers?
---

Codeceptjs-BDD implemets the scripts and commands to run tests on Multiple Browsers in Parallel. You can pass your choices of browsers as comma separated values to the **-\-profile** command

```bash
    yarn acceptance:parallel:multibrowsers --profile sauce:<browser1,browser2...>
```    

<br>

## Complete Example
---

Below command runs `@login` tag on **Chrome,Firefox,Safari** browsers, all in **Parallel**

```bash
    yarn acceptance:parallel:multibrowsers --profile sauce:chrome,firefox,safari --grep @login
```


