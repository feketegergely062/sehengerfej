const {Builder,By, Key} = require('selenium-webdriver');
const chrome = require('chromedriver');
const url = 'http://localhost:3000';


async function testCalc(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get(url);
    await driver.findElement(By.id('radius')).sendKeys('30');
    await driver.findElement(By.id('height')).sendKeys('35');
    await driver.findElement(By.id('calcButton')).click();
    var surface = await driver.findElement(By.id('surface')).getAttribute('value');
    console.log('Felszin: ',surface);

}
testCalc();