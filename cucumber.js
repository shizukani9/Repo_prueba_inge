module.exports = {
  default: {
    //parallel: 2,
    format: [
      "html:reports/cucumber-report.html",
      "@cucumber/pretty-formatter",
      //"./reports/reporter.js:reports/allure-dummy.txt",
    ],
    //paths: ["tests/scenarios/**"],
    //import: ["tests/support/**"],
  },
};
