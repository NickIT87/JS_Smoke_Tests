// $ mocha test --reporter mochawesome --reporter-options autoOpen=true
var webdriver = require('selenium-webdriver'),
    { describe, it, after, before } = require('selenium-webdriver/testing'),
    By = webdriver.By,
    assert = require('assert'),
    until = webdriver.until;
var driver;
var find;

describe('library app scenarios', function() {   
    this.timeout(50000);
    
    beforeEach(function(){
        driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get("http://library-app.firebaseapp.com");     
        driver.manage().window().setPosition(0, -600);   
    });

    afterEach(function(){
        driver.quit();
    });

    it('Changes button opacity upon email being filled out', function(){
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@mail.com');
        return submitBtn.getCssValue('opacity').then(function(result) {
            assert(result === '1');
        });
    });

    it('submitting email shows in alert', function(){
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@mail.com');
        submitBtn.click();
        //explicit wait
        driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
        driver.findElements(By.css('.alert-success')).then(function(result){
            assert.equal(result.length, 1, "alert-success were found");
        });
    });

    it('Shows a navbar', function(){
        driver.findElements(By.css('nav')).then(function(result){
            assert.equal(result.length, 1);
        });        
    });
});

