// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Input wrong info validation', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Input wrong info validation', async function() {
    await driver.get("http://localhost:1604/")
    await driver.manage().window().setRect({ width: 1440, height: 804 })
    await driver.findElement(By.name("firstName")).click()
    await driver.findElement(By.name("lastName")).click()
    await driver.findElement(By.name("caseDescription")).click()
    await driver.findElement(By.css(".css-sedbkg-ButtonBase > .css-7no60z-ButtonBase")).click()
    {
      const element = await driver.findElement(By.name("native-validation-example"))
    }
  })
})
