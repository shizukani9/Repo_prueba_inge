const {
  Before,
  After,
  Given,
  When,
  Then,
  defineStep,
} = require("@cucumber/cucumber");
const chai = require("chai");
const expect = chai.expect;
const { default: puppeteer } = require("puppeteer-core");
const myassertion = require("../../core/utils/myassertion");
const PuppetSingleton = require("../../core/ui/puppet-single");
const mylogger = require("../../core/utils/mylogger");
const header_component = require("../../main/ui/header_component");

//Ayuda memoria
/* const driver = await puppeteer.launch({ channel: "chrome", headless: false });
const page = await driver.newPage(); */
//Primer uso de puppeteer
/* Before({ tags: "@ui" }, async function () {
  console.log("Starting Framework");
  console.log("Opening Browser");
  this.driver = await puppeteer.launch({
    executablePath:
      "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: false,
  });
  console.log("Opening Tab");
  this.page = await this.driver.newPage();
  console.log("Navigating to login page");
  await this.page.goto("https://www.saucedemo.com/");
});

After({ tags: "@ui" }, async function () {
  console.log("Closing Browser");
  await this.driver.close();
});

Given("I set the login credentials with:", async function (dataTable) {
  console.log("Recived Credentials", dataTable.rowsHash());
  const credentials = dataTable.rowsHash();
  await this.page.locator("[data-test=username]").click();
  await this.page.locator("[data-test=username]").fill(credentials.Username);
  await this.page.locator("[data-test=password]").click();
  await this.page.locator("[data-test=password").fill(credentials.Password);
});

When("I try to login the application", async function () {
  await this.page.locator("[data-test='login-button']").click();
});

Then("I should see the inventory page", async function () {
  await this.page.waitForSelector(".app_logo");
  await this.page.waitForSelector('[data-test="shopping-cart-link"]');
  const titleElement = await this.page.waitForSelector(".title");
  expect(await titleElement.evaluate((el) => el.textContent)).to.eq("Products");
}); */

//Uso de puppeteer con singleton y factory
Before({ tags: "@ui" }, async function () {
  mylogger.info("Starting Framework");
  await new PuppetSingleton();
  mylogger.info("Navigating to login page");
  await PuppetSingleton.page.goto("https://www.saucedemo.com/");
});

After({ tags: "@ui" }, async function () {
  await PuppetSingleton.closeBrowser();
});

Given("I set the login credentials with:", async function (dataTable) {
  mylogger.debug("Recived Credentials", dataTable.rowsHash());
  const credentials = dataTable.rowsHash();
  await PuppetSingleton.page.locator("[data-test=username]").click();
  await PuppetSingleton.page
    .locator("[data-test=username]")
    .fill(credentials.Username);
  await PuppetSingleton.page.locator("[data-test=password]").click();
  await PuppetSingleton.page
    .locator("[data-test=password")
    .fill(credentials.Password);
});

When("I try to login the application", async function () {
  await PuppetSingleton.page.locator("[data-test='login-button']").click();
});

Then("I should see the inventory page", async function () {
  await PuppetSingleton.page.waitForSelector(".app_logo");
  await PuppetSingleton.page.waitForSelector(
    '[data-test="shopping-cart-link"]'
  );
  const titleElement = await PuppetSingleton.page.waitForSelector(".title");
  myassertion(await titleElement.evaluate((el) => el.textContent)).to.eq(
    "Products"
  );
});

defineStep("I log out the application", async function () {
  await header_component.openSideMenu();
  await header_component.logOut();
});

Then("I should see the locked out error message", async function () {
  //Este metodo compara el titulo de la clase para el paso final
  const titleElement = await PuppetSingleton.page.waitForSelector(".login_logo");
  myassertion(await titleElement.evaluate((el) => el.textContent)).to.eq(
    "Swag Labs"
  );
});