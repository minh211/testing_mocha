// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Enter Patient info', function() {
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
  it('Enter Patient info', async function() {
    await driver.get("http://localhost:1604/")
    await driver.manage().window().setRect({ width: 1440, height: 804 })
    await driver.findElement(By.name("firstName")).click()
    await driver.findElement(By.name("firstName")).sendKeys("Test")
    await driver.findElement(By.name("lastName")).sendKeys("User")
    await driver.findElement(By.name("gender")).click()
    await driver.findElement(By.name("caseDescription")).click()
    await driver.findElement(By.name("caseDescription")).sendKeys("Test case")
    await driver.findElement(By.xpath("//span[contains(.,\'Submit\')]")).click()
  })
})
