const { default: puppeteer } = require("puppeteer-core");

module.exports = class MyEdge {
  constructor(configuration) {
    return (async () => {
      return await puppeteer.launch({
        executablePath:
          "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        headless: configuration.headless,
      });
    })();
  }
};
