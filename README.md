# Volvo

WebdriverIO Volvo Project

## Execution

```bash
./run.sh
```
or
```bash
docker build . -t volvo
docker run volvo
```

## Parallel execution of tests (Local)

```bash
npx wdio run wdio.conf.js
```
It will run parallel in 3 different chrome browsers.

## Reporting of the results

```bash
allure generate allure-results && allure open
```
The allure-result file will be created automatically.

## Execution a single test file

```bash
npx wdio --spec [file_name]
```

## Visual regression testing

```bash
npx wdio --spec visualRegression.e2e.js
```
The ".tmp" file will be created automatically.
