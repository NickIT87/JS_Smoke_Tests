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

driver.findElements(By.css('nav li')).then(function(els){
    els.map(function(el){
        el.getText().then(function(txt){
            console.log("the text of the navbar element is: " + txt);
        });
    });
});

driver.sleep(1000);
driver.quit();
