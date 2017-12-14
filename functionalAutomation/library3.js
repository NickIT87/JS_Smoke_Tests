var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("http://library-app.firebaseapp.com");
driver.manage().timeouts().implicitlyWait(5000);

driver.findElement(By.css('input')).sendKeys('user@email.com');
driver.findElement(By.css('.btn-lg')).click();
//driver.sleep(1000);

driver.findElement(By.css('.alert-success')).getText().then(function(txt) {
    console.log("Alert success text is: " + txt);
});

driver.sleep(1000);
driver.quit();
