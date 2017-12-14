var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("http://library-app.firebaseapp.com");
driver.findElements(By.css('input')).then(function(el){
    console.log("success " + el);
});
driver.findElement(By.css('.btn-lg')).getText().then(function(txt){
    console.log("found the button: " + txt);
});
driver.findElement(By.css('nav li')).then(function(array){
    console.log("Found the elements you wanted " + array);
});

driver.sleep(1000);
driver.quit();
