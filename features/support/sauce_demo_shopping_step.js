const { When, Then, Given, And } = require('@cucumber/cucumber')
const { chromium, expect } = require('@playwright/test');
const { timeout } = require('../../playwright.config');

//const {LoginPage} = require('../../page_object/login.page')
////const {ProductPage} = require('../../page_object/product.page')
//const {PaymentPage} = require('../../page_object/payment.page')


//const loginpage = new LoginPage();
//const productpage = new ProductPage();
//const paymentpage = new PaymentPage();

Given('User is on the SauceDemo website', async () => {
  // Write code here that turns the phrase above into concrete actions
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();

  this.page = await context.newPage();
  await this.page.goto("https://www.saucedemo.com/");

});

When('User logs in with userID {string} and password {string}', async (username, password) => {
  // Write code here that turns the phrase above into concrete actions
  await this.page.fill('input[name="user-name"]', username);
  await this.page.fill('input[name="password"]', password);
  await this.page.click('input[name="login-button"]');
  await expect(this.page.getByText('Products')).toBeVisible();

})

Then('Verify all items are present on the landing page and add all items to cart', async () => {
  // Find the element by its text content
  //const backpackAddToCartButton = await this.page.waitForSelector('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(this.page.getByText('Sauce Labs Backpack')).toBeVisible();
  await this.page.getByText('Sauce Labs Backpack').click()
  await this.page.getByText('Add to cart').click()
  await this.page.locator('#back-to-products').click()

  await this.page.getByText('Sauce Labs Bike Light').click()
  await this.page.getByText('Add to cart').click()
  await this.page.locator('#back-to-products').click()

  await this.page.locator('[alt="Sauce Labs Bolt T-Shirt"]').click({ force: true })
  await this.page.getByText('Add to cart').click()
  await this.page.locator('#back-to-products').click()
});

Then('User Navigates to the cart', async () => {
  await this.page.locator('.shopping_cart_link').click()

});

When('User removes {string} from the cart', async (productName) => {
  // Write code here that turns the phrase above into concrete actions
  await this.page
    .locator('.cart_item_label')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .getByText('Remove')
    .click();
});


When('User clicks Checkout', async () => {
  // Write code here that turns the phrase above into concrete actions
  await this.page.getByRole('button', { name: 'checkout' })
    .click();
});


When('User provies name and zip code', async () => {
  // Write code here that turns the phrase above into concrete actions


  await this.page.getByPlaceholder("First Name").fill("Choudhury")
  await this.page.getByPlaceholder("Last Name").fill("Iqbal")
  await this.page.getByPlaceholder("Zip/Postal Code").fill("10455")



});

When('User clicks continue', async () => {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator('#continue').click();
});

When('User removes {string} from the Checkout', async (productName) => {
  // Write code here that turns the phrase above into concrete actions
  await this.page
    .locator('.inventory_item_name')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    .click();
  await this.page.locator('#remove').click()
});

When('User checks Finish if total prices is less than {string} $ or User clicks Cancel Button', async (amount) => {
  // Find the div element containing the total value
  const totalValueText = await this.page.locator('.summary_total_label').textContent();
  console.log("Value from UI" + totalValueText)
  const regex = /\$\d+\.\d+/;
  const match = totalValueText.match(regex);
  const numberString = match[0].slice(1);
  const number = parseFloat(numberString);

  console.log("Total After filtering " + number); // Output: 32.39
  // Extract the text content
  //const totalValueText = await totalValueElement.textContent();

  // Extract only the numeric part using regular expression
  //const numericPart = totalValueText.match(/\d+\.\d+/)[0];

  // Convert the numeric part to a float
  //const totalValue = parseFloat(numericPart);
  const totalValue = 41;
  // Condition to determine which button to click
  if (number > amount) {
    // Click the "Cancel" button
    await this.page.getByRole("button", { name: 'cancel' }).click();
  } else {
    await this.page.getByRole("button", { name: 'finish' }).click();
    const headerText = await this.page.locator("h2[data-test='complete-header']")
    await expect(headerText).toHaveText("Thank you for your order!",{timeout: 20000})

  }
});


When('User clicks Back Home Button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("#back-to-products").click()

});

Then('User should be logged out', async () => {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("#react-burger-menu-btn").click()
  await this.page.locator("#logout_sidebar_link").click()
  const loginButton = await this.page.locator("#login-button")
  await expect(loginButton).toBeVisible();



});