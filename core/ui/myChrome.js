const { default: puppeteer } = require("puppeteer-core");

module.exports = class MyChrome {
  constructor(configuration) {
    return (async () => {
      return await puppeteer.launch({
        channel: "chrome",
        headless: configuration.headless,
      });
    })();
  }
};
