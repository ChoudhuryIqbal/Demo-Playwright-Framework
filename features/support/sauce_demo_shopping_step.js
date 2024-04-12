const { When, Then, Given, And } = require('@cucumber/cucumber')
const { chromium, expect } = require('@playwright/test')

//const {LoginPage} = require('../../page_object/login.page')
////const {ProductPage} = require('../../page_object/product.page')
//const {PaymentPage} = require('../../page_object/payment.page')


//const loginpage = new LoginPage();
//const productpage = new ProductPage();
//const paymentpage = new PaymentPage();

Given('User is on the SauceDemo website', async () =>{
  // Write code here that turns the phrase above into concrete actions
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();

  this.page = await context.newPage();
  await this.page.goto("https://www.saucedemo.com/");

});

When('User logs in with userID {string} and password {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


Then('Verify all items are present on the landing page and add all items to cart', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User Navigates to the cart', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User removes {string} from the cart', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks Checkout', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User provies name and zip code', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks continue', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User removes {string} from the Checkout', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks on the cart', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks Checkout', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User provies name and zip code', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User checks Finish if total prices is less than ${float} or User clicks Cancel Button', function (float) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks Back Home Button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks on the menu icon', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('User clicks Log out', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
  return 'pending';
});

Then('User should be logged out', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


Then('User should be logged out', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});



