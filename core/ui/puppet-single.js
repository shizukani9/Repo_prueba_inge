const { Page, Browser, default: puppeteer } = require("puppeteer-core");
const mylogger = require("../utils/mylogger");
const configuration = require("../../configuration.json");
const MyEdge = require("./myEdge");
const MyChrome = require("./myChrome");

const browserStrategy = {
  chrome: MyChrome,
  edge: MyEdge,
};

module.exports = class PuppetSingleton {
  /**@type {Browser} */
  static driver;
  /**@type {Page} */
  static page;
  constructor() {
    return (async () => {
      if (!PuppetSingleton.page) {
        /*         mylogger.debug("Starting Browser");
        PuppetSingleton.driver = await puppeteer.launch({
          channel: "chrome",
          headless: false,
        }); */
        PuppetSingleton.driver = await new browserStrategy[
          configuration.browser.name.toLocaleLowerCase()
        ](configuration.browser);
        mylogger.debug("Openning Tab");
        PuppetSingleton.page = await PuppetSingleton.driver.newPage();
        mylogger.debug(
          "Created instance",
          await PuppetSingleton.driver.version()
        );
      }
    })();
  }

  static async closeBrowser() {
    if (PuppetSingleton.page) {
      mylogger.debug("Closing browser");
      await PuppetSingleton.driver.close();
      PuppetSingleton.driver = null;
      PuppetSingleton.page = null;
    } else {
      mylogger.error("No browser to close");
    }
  }
};
