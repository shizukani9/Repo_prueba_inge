const puppeteer = require("puppeteer-core");

(async function ejemplo0() {
  //Creamos la conexion con chrome y abrimos el browser
  const driver = await puppeteer.launch({ channel: "chrome", headless: false });
  //Esperamos 5 segundos para que sea educativo
  await delay(5000);
  const page = await driver.newPage();
  //Esperamos 5 segundos para que sea educativo
  await delay(5000);
  //Navegamos a la pagina que desemos
  await page.goto("https://www.saucedemo.com/");
  let title = await page.title();
  console.log("El titulo de la pagina es", title);
  //Esperamos 5 segundos para que sea educativo
  await delay(5000);
  //Cerramos el explorador
  await page.close();
  console.log("Cerrando pagina");
  //Esperamos 5 segundos para que sea educativo
  await delay(5000);
  await driver.close();
  console.log("Cerrando browser");
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
