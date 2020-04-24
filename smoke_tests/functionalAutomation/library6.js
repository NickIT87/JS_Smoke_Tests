var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get("http://library-app.firebaseapp.com");

var submitBtn = driver.findElement(By.css('.btn-lg'));
driver.findElement(By.css('input')).sendKeys('us@mail.com');

driver.wait(function(){
    return submitBtn.getCssValue('opacity').then(function(result) {
        return result === '1';
    });
}, 15000);

submitBtn.click();

//explicit wait
driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt) {
    console.log("Alert success text is: " + txt);
});

driver.sleep(1000);
driver.quit();
