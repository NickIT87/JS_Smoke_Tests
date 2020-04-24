// $ mocha test --reporter mochawesome --reporter-options autoOpen=true
var webdriver = require('selenium-webdriver'),
    { describe, it, after, before } = require('selenium-webdriver/testing'),
    By = webdriver.By,
    until = webdriver.until;
    var driver;

describe('library app scenarios', function() {   
    this.timeout(50000);
    
    beforeEach(function(){
        driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get("http://library-app.firebaseapp.com");        
    });

    afterEach(function(){
        driver.quit();
    });

    it('Changes button opacity upon email being filled out', function(){
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@mail.com');
        driver.wait(function(){
            return submitBtn.getCssValue('opacity').then(function(result) {
                return result === '1';
            });
        }, 5000);        
    });

    it('submitting email shows in alert', function(){
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@mail.com');
        submitBtn.click();
        //explicit wait
        driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt) {
            console.log("Alert success text is: " + txt);
        });
    });

    it('Shows a navbar', function(){
        driver.findElement(By.css('nav')).getText().then(function(txt){
            console.log(txt);
        });        
    });
});

