//Adapter 1 para log 4js
const log4js = require("log4js");
const mylogger = log4js.getLogger();
mylogger.level = "debug";

//Adapter 2 para winston
/* const winston = require("winston");

const mylogger = winston.createLogger({
  level: "debug",
  transports: [new winston.transports.File({ filename: "reports/combined.log" })],
}); */

module.exports = mylogger;
