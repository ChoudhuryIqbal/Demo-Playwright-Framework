const { When, Then, Given, And } = require('@cucumber/cucumber')
const { chromium, expect } = require('@playwright/test');
const { timeout } = require('../../playwright.config');
const fs = require('fs')
const { parse } = require("csv-parse/sync")
const csvData = fs.readFileSync('testdata/data.csv');
const parsedData = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

Given('User is on the SauceDemo website', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
  await this.page.goto("https://www.saucedemo.com/");
});

When('User logs in with userID {string} and password {string}', async (username, password) => {
  await this.page.fill('input[name="user-name"]', username);
  await this.page.fill('input[name="password"]', password);
  await this.page.click('input[name="login-button"]');
  await expect(this.page.getByText('Products')).toBeVisible();
})

Then('Verify all items are present on the landing page and add all items to cart', async () => {
  const results = parsedData;
  console.log(results)
  for (const result of results) {
    const item = result.Items;
    console.log(item);

    try{
      let currentItem = await this.page
      .locator('.inventory_item_description')
      .filter({ hasText: item })
      .getByText('Add to cart');
      if (await currentItem.isVisible()) {
        await currentItem.click();
      } else {
        console.log(`${item} is not visible.`);
      }
    }
    catch (error) {
      console.error(`Error clicking on "${item}":`, error);
    }
  }});

Then('User Navigates to the cart', async () => {
  await this.page.locator('.shopping_cart_link').click()

});

When('User removes {string} from the cart', async (productName) => {
  await this.page
    .locator('.cart_item_label')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .getByText('Remove')
    .click();
});

When('User clicks Checkout', async () => {
  await this.page.getByRole('button', { name: 'checkout' })
    .click();
});


When('User provies name and zip code', async () => {
  await this.page.getByPlaceholder("First Name").fill("Choudhury")
  await this.page.getByPlaceholder("Last Name").fill("Iqbal")
  await this.page.getByPlaceholder("Zip/Postal Code").fill("10455")
});

When('User clicks continue', async () => {
  await this.page.locator('#continue').click();
});

When('User removes {string} from the Checkout', async (productName) => {
  await this.page
    .locator('.inventory_item_name')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    .click();
  await this.page.locator('#remove').click()
});

When('User checks Finish if total prices is less than {string} $ or User clicks Cancel Button', async (amount) => {
  const totalValueText = await this.page.locator('.summary_total_label').textContent();
  console.log("Value from UI" + totalValueText)
  const regex = /\$\d+\.\d+/;
  const match = totalValueText.match(regex);
  const numberString = match[0].slice(1);
  const number = parseFloat(numberString);
  console.log("Total After filtering " + number); // Output: 32.39
  if (number > amount) {
    await this.page.getByRole("button", { name: 'cancel' }).click();
  } else {
    await this.page.getByRole("button", { name: 'finish' }).click();
    const headerText = await this.page.locator("h2[data-test='complete-header']")
    await expect(headerText).toHaveText("Thank you for your order!", { timeout: 20000 })
  }
});

When('User clicks Back Home Button', async () => {
  await this.page.locator("#back-to-products").click()
});

Then('User should be logged out', async () => {
  await this.page.locator("#react-burger-menu-btn").click()
  await this.page.locator("#logout_sidebar_link").click()
  const loginButton = await this.page.locator("#login-button")
  await expect(loginButton).toBeVisible();
  this.page.close()
});