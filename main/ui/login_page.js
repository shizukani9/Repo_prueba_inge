const PuppetSingleton = require("../../core/ui/puppet-single");
const mylogger = require("../../core/utils/mylogger");

class LoginPage {
  usernameInput = "[data-test=username]";
  passwordInput = "[data-test=password]";
  loginButton = '[data-test="login-button"]';

  constructor() {
    mylogger.debug("Starting Login Page");
  }

  async isVisible() {
    await PuppetSingleton.page.waitForSelector(this.usernameInput);
    await PuppetSingleton.page.waitForSelector(this.passwordInput);
    await PuppetSingleton.page.waitForSelector(this.loginButton);
  }

  async setCredentials(credentials) {
    mylogger.debug("Setting Credentials");
    await PuppetSingleton.page.locator(this.usernameInput).click();
    await PuppetSingleton.page
      .locator(this.usernameInput)
      .fill(credentials.Username);
    await PuppetSingleton.page.locator(this.passwordInput).click();
    await PuppetSingleton.page
      .locator(this.usernameInput)
      .fill(credentials.Password);
  }

  async clickLoginButton() {
    mylogger.debug("Trying to login to application");
    await PuppetSingleton.page.locator(this.loginButton).click();
  }
}

module.exports = new LoginPage();
