# Playwright Demo Cognizant

## Overview

This repository contains a sample solution for automating [Sauce Demo](https://www.saucedemo.com/) using JavaScript and the Playwright automation tool. Playwright is a powerful end-to-end testing library for web applications.

## Installation

Follow these steps to set up and run the tests locally:

1. Clone the repository to your local machine using `git clone`.
2. Open your terminal and navigate to the cloned directory.
3. Run `npm install` to install the required dependencies.
4. Run `npx playwright install` to set up Playwright.
5. Execute the tests by running `npm run test`.

## CSV File

The current specifications export data from a CSV file located under the "testdat" folder.

## Headless Mode

By default, the tests run in headless mode to execute them silently. If you want to disable headless mode, you can modify the configuration in the "sauce_demo_shopping_step.js" file to `{ headless: false }`.

![Headless Mode Configuration](https://github.com/ChoudhuryIqbal/Demo-Playwright-Framework/assets/10875023/a02db8d4-6b78-4d1e-9e30-28913ef9760f)

## Reporting

After executing the tests, a new folder named "test-results" will be created in the root directory of the repository. This folder contains both HTML and JSON reports.

![Report Folder](https://github.com/ChoudhuryIqbal/Demo-Playwright-Framework/assets/10875023/4b8d36e2-79a0-4985-b6e6-f98ca291dd70)

## GitHub Actions Integration

To execute the test cases remotely using GitHub Actions, follow these steps:

1. Navigate to the "Actions" tab of your GitHub repository.
2. Select the latest workflow job.
3. Click "Re-run all jobs" to trigger a new execution.

![GitHub Actions Workflow](https://github.com/ChoudhuryIqbal/Demo-Playwright-Framework/assets/10875023/7eb61053-2062-4a6c-b9ed-e767d2b28329)

4. Once the job is completed, you can view the published archived folder. Click to download it to your local machine and view the reports.

![Archived Folder](https://github.com/ChoudhuryIqbal/Demo-Playwright-Framework/assets/10875023/f127d525-eb66-4089-8e65-4ce8f5f85ffb)

5. The workflow will be triggered automatically whenever new code is pushed to the master branch.

This setup allows for seamless integration of automated testing into your GitHub repository, ensuring that tests are executed automatically with every code change.
