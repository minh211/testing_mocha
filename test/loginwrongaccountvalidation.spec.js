// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login wrong account validation', function() {
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
  it('Login wrong account validation', async function() {
    await driver.get("http://localhost:1604/")
    await driver.manage().window().setRect({ width: 1440, height: 804 })
    await driver.findElement(By.linkText("Sign In")).click()
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("minhleee")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123445")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.css(".alert")).click()
  })
})
