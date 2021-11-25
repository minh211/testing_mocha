// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Change Patient status in queue', function() {
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
  it('Change Patient status in queue', async function() {
    await driver.get("http://localhost:1604/")
    await driver.manage().window().setRect({ width: 1440, height: 804 })
    await driver.findElement(By.linkText("Sign In")).click()
    {
      const element = await driver.findElement(By.xpath("//input[@id=\'username\']"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("username")).sendKeys("minhle")
    await driver.findElement(By.id("password")).sendKeys("leminh")
    await driver.findElement(By.xpath("//button[contains(.,\'Login\')]")).click()
    await driver.findElement(By.linkText("Queue")).click()
    await driver.findElement(By.xpath("//span[contains(.,\'Next patient\')]")).click()
  })
})
