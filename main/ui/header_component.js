const PuppetSingleton = require("../../core/ui/puppet-single");
const mylogger = require("../../core/utils/mylogger");

class HeaderComponent {
  titleLabel = ".title";
  applicationLogo = ".app_logo";
  cartButton = '[data-test="shopping-cart-link"]';

  //Elementos compartidos
  hamburgerButton = ".bm-burger-button";
  hidenSideMenu = ".bm-menu-wrap[hidden='true']";
  visibleSideMenu = ".bm-menu-wrap[aria-hidden='false']";
  logoutButton = "#logout_sidebar_link";

  async isVisible() {
    mylogger.debug("Checking header component is present");
    await PuppetSingleton.page.waitForSelector(this.applicationLogo);
    await PuppetSingleton.page.waitForSelector(this.cartButton);
    await PuppetSingleton.page.waitForSelector(this.titleLabel);
  }

  async getTitleText() {
    mylogger.debug("Getting Title Text");
    const element = await PuppetSingleton.page.waitForSelector(".title");
    return await element.evaluate((el) => el.textContent());
  }

  async openSideMenu() {
    mylogger.debug("Openning Side Menu");
    if (
      await PuppetSingleton.page.waitForSelector(this.hidenSideMenu, {
        hidden: false,
      })
    ) {
      mylogger.debug("Clicking hamburger button");
      await PuppetSingleton.page.locator(this.hamburgerButton).click();
      //await PuppetSingleton.page.waitForSelector(this.visibleSideMenu);
    }
  }

  async logOut() {
    mylogger.debug("Login Out");
    //await PuppetSingleton.page.waitForSelector(this.logoutButton);
    await PuppetSingleton.page.locator(this.logoutButton).click();
  }
}

module.exports = new HeaderComponent();
