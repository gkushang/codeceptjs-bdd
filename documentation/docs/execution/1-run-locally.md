---
title: Run Locally
sub_title: Execute Features on Local Development Enviornment
parents: ["Execution"]
---

## 💻 Run All Tests

Below command runs full regression on Default Browser.

Default Browser: `Chrome`

```bash

    yarn acceptance

```
<br>

### 🎠 Run on Different Browser

Browser selection is conrolled by `--profile <browser>` command line parameter

Below command runs full regression on **Firefox** Browser.

```bash

    yarn acceptance --profile firefox

```
<br>

### 🌀 To run Individual Tags

Run individual tags by `--grep <@tag>` command line parameter

Below command runs tests tagged with **@my\_test\_tag** on _default_ browser

```bash

    yarn acceptance --grep @my_test_tag

```

More information on tags is available [here](https://somelin.com)

## 🎥 Watch in Action

<a href='https://youtu.be/udp_ZYT4imM' target='_blank'><img src='https://i.postimg.cc/XNL9jHmW/Run-All-Tests-Locally.png' border='0' alt='How To Run Tests Locally'/></a>


